import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hot0jtf_c.css';
import '../../css/p/p8swzyblw.css';
import '../../css/i/izs6c-bvl.css';
import '../../css/t/tqe-v7b0v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hot0jtf_c"/><path class="p8swzyblw"/><path class="izs6c-bvl"/><path class="tqe-v7b0v"/>`,
		"fallback": "energy-icons:weather-vane-48",
	});
}

export default Component;
