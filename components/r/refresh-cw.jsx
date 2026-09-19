import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mcingm8eb.css';
import '../../css/g/ge59m1bsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mcingm8eb"/><path class="ge59m1bsv"/></g>`,
		"fallback": "hugeicons:refresh-cw",
	});
}

export default Component;
