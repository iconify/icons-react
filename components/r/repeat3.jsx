import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/e/evq3lubsj.css';
import '../../css/i/ivhse19bz.css';
import '../../css/y/y9q43ibal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="evq3lubsj"/><path class="ivhse19bz"/><path class="y9q43ibal"/></g>`,
		"fallback": "reicon:repeat3",
	});
}

export default Component;
