import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf3016bec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf3016bec"/>`,
		"fallback": "thesvg-color:threadless",
	});
}

export default Component;
