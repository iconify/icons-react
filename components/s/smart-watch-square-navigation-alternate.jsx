import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jy8zbxglv.css';
import '../../css/o/ohqzu-e4f.css';
import '../../css/f/f79m7eb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jy8zbxglv"/><path class="ohqzu-e4f"/><path class="f79m7eb-d"/></g>`,
		"fallback": "streamline-freehand-color:smart-watch-square-navigation-alternate",
	});
}

export default Component;
