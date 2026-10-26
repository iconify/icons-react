import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_ovouiea.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_ovouiea"/>`,
		"fallback": "doodle-icons:umbrella",
	});
}

export default Component;
