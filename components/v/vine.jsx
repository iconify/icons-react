import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdlpb_b-j.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdlpb_b-j"/>`,
		"fallback": "fontisto:vine",
	});
}

export default Component;
