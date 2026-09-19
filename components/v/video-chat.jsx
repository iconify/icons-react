import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz517qe8i.css';
import '../../css/t/tmstyeo8n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz517qe8i"/><path class="tmstyeo8n"/>`,
		"fallback": "carbon:video-chat",
	});
}

export default Component;
