import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u54wvrbhl.css';
import '../../css/w/w1i6zjb6u.css';
import '../../css/a/ahp9osbzj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u54wvrbhl"/><path class="w1i6zjb6u"/><path class="ahp9osbzj"/>`,
		"fallback": "energy-icons:savings-jar-48",
	});
}

export default Component;
