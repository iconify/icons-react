import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef7q9ccnq.css';
import '../../css/n/nlzn_o26i.css';
import '../../css/v/v1o3w1bgh.css';
import '../../css/y/yo2er3njp.css';
import '../../css/u/ucbv-ebek.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef7q9ccnq"/><path class="nlzn_o26i"/><path class="v1o3w1bgh"/><path class="yo2er3njp"/><path class="ucbv-ebek"/>`,
		"fallback": "energy-icons:package-plus-20-bold",
	});
}

export default Component;
