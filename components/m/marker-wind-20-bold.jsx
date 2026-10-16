import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hei8_htdz.css';
import '../../css/q/q0ohsgrim.css';
import '../../css/s/snb525bvf.css';
import '../../css/z/zqel-5qvw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hei8_htdz"/><path class="q0ohsgrim"/><path class="snb525bvf"/><path class="zqel-5qvw"/>`,
		"fallback": "energy-icons:marker-wind-20-bold",
	});
}

export default Component;
