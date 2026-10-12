import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h4os3wrnp.css';
import '../../css/f/fpuyb9bst.css';
import '../../css/r/r4wxbzatl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h4os3wrnp"/><rect transform="rotate(90 0 21.58)scale(-1 1)" class="fpuyb9bst"/><path class="r4wxbzatl"/></g>`,
		"fallback": "andrsrxn:lightning-square",
	});
}

export default Component;
