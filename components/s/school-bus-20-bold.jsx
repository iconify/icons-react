import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwwimyb2n.css';
import '../../css/w/whqsulbjb.css';
import '../../css/r/rcwt38dik.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwwimyb2n"/><path class="whqsulbjb"/><path class="rcwt38dik"/>`,
		"fallback": "energy-icons:school-bus-20-bold",
	});
}

export default Component;
