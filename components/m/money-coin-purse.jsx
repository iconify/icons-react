import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a0dajrzpe.css';
import '../../css/b/b_ra1kqvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a0dajrzpe"/><path class="b_ra1kqvl"/></g>`,
		"fallback": "streamline-freehand-color:money-coin-purse",
	});
}

export default Component;
