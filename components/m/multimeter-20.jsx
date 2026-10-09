import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj3g-36wb.css';
import '../../css/h/hoczzqb5s.css';
import '../../css/m/ml860nrta.css';
import '../../css/e/eqh2q3bcc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj3g-36wb"/><path class="hoczzqb5s"/><path class="ml860nrta"/><path class="eqh2q3bcc"/>`,
		"fallback": "energy-icons:multimeter-20",
	});
}

export default Component;
