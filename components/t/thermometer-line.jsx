import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyci4acry.css';
import '../../css/j/jy7_ogj-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyci4acry"/><path class="jy7_ogj-g"/>`,
		"fallback": "mingcute:thermometer-line",
	});
}

export default Component;
