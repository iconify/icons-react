import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ac9dembib.css';
import '../../css/z/zx2waxb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ac9dembib"/><path class="zx2waxb7m"/></g>`,
		"fallback": "reicon:lamp-charge",
	});
}

export default Component;
