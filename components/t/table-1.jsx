import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf0xtbtqb.css';

const viewBox = {"width":29,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf0xtbtqb"/>`,
		"fallback": "fontisto:table-1",
	});
}

export default Component;
