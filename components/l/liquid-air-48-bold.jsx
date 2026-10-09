import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1jezxbtq.css';
import '../../css/c/cj3y4tbey.css';
import '../../css/q/q5eafeb5u.css';
import '../../css/t/ta44qtbsu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1jezxbtq"/><path class="cj3y4tbey"/><path class="q5eafeb5u"/><path class="ta44qtbsu"/>`,
		"fallback": "energy-icons:liquid-air-48-bold",
	});
}

export default Component;
