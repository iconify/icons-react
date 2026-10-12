import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4slh4bwa.css';
import '../../css/t/td-ybovkx.css';
import '../../css/f/fnaxk-b_r.css';
import '../../css/j/jzeh2cbeq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4slh4bwa"/><path class="td-ybovkx"/><path class="fnaxk-b_r"/><path class="jzeh2cbeq"/>`,
		"fallback": "energy-icons:power-station-x-20-bold",
	});
}

export default Component;
