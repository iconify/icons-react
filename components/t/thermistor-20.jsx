import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr-mm0bik.css';
import '../../css/f/f_pk9vbvt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr-mm0bik"/><path class="f_pk9vbvt"/>`,
		"fallback": "energy-icons:thermistor-20",
	});
}

export default Component;
