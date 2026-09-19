import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e4gndac2i.css';
import '../../css/m/mr0kfgbyl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="e4gndac2i"/><path class="mr0kfgbyl"/></g>`,
		"fallback": "cryptocurrency-color:mln",
	});
}

export default Component;
