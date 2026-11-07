import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziumw9htl.css';
import '../../css/l/ltth4zvne.css';
import '../../css/t/t4p0zib2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ziumw9htl"/><path clip-rule="evenodd" class="ltth4zvne"/><path class="t4p0zib2k"/>`,
		"fallback": "solar:repeat-one-minimalistic-bold",
	});
}

export default Component;
