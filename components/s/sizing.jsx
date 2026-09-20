import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si4f12egu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si4f12egu"/>`,
		"fallback": "streamline-plump:sizing",
	});
}

export default Component;
