import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jozh0c8mh.css';
import '../../css/w/wred-9hyr.css';
import '../../css/o/o8obgx-hp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jozh0c8mh"/><path class="wred-9hyr"/><path class="o8obgx-hp"/>`,
		"fallback": "energy-icons:phone-call-20-bold",
	});
}

export default Component;
