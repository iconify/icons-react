import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf_g5ibkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf_g5ibkm"/>`,
		"fallback": "thesvg-color:macpaw",
	});
}

export default Component;
