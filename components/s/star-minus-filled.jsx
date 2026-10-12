import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjms-oqvl.css';
import '../../css/v/v2tmeobir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjms-oqvl"/><path class="v2tmeobir"/>`,
		"fallback": "lucide-extended:star-minus-filled",
	});
}

export default Component;
