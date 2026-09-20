import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmq9vpghv.css';
import '../../css/t/twk1xgb_t.css';
import '../../css/t/t6s89ibas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dmq9vpghv"><path clip-rule="evenodd" class="twk1xgb_t"/><path class="t6s89ibas"/></g>`,
		"fallback": "material-icon-theme:lynx",
	});
}

export default Component;
