import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rfrcmacnj.css';
import '../../css/t/to2fhmeuh.css';
import '../../css/g/gfqeb836v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rfrcmacnj"/><rect class="to2fhmeuh"/><path class="gfqeb836v"/></g>`,
		"fallback": "andrsrxn:sort-zero-one",
	});
}

export default Component;
