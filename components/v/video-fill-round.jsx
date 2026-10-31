import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvv0n5b3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvv0n5b3f"/>`,
		"fallback": "coolicons:video-fill-round",
	});
}

export default Component;
