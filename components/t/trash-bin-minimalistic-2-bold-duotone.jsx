import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pepyl3vpw.css';
import '../../css/z/z3n43-bnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pepyl3vpw"/><path class="z3n43-bnv"/>`,
		"fallback": "solar:trash-bin-minimalistic-2-bold-duotone",
	});
}

export default Component;
