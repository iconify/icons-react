import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/grpepqqwi.css';
import '../../css/h/hmp-t_gql.css';
import '../../css/j/jcnvp7bem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="grpepqqwi"/><path class="hmp-t_gql"/><path class="jcnvp7bem"/></g>`,
		"fallback": "andrsrxn:lock",
	});
}

export default Component;
