import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkooz0zfl.css';
import '../../css/z/za8l1lbvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkooz0zfl"/><path class="za8l1lbvs"/>`,
		"fallback": "boxicons:microscope",
	});
}

export default Component;
