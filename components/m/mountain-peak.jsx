import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztzh1dyat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztzh1dyat"/>`,
		"fallback": "boxicons:mountain-peak",
	});
}

export default Component;
