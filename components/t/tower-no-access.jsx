import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j-adgme1p.css';
import '../../css/d/dawbntbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j-adgme1p"/><path class="dawbntbka"/></g>`,
		"fallback": "iconoir:tower-no-access",
	});
}

export default Component;
