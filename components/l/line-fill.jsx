import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/j/j8h-lgbwv.css';
import '../../css/o/or0j-mbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="j8h-lgbwv"/><path class="or0j-mbfc"/></g>`,
		"fallback": "lets-icons:line-fill",
	});
}

export default Component;
