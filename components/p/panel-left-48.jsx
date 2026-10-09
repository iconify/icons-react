import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3q6uacna.css';
import '../../css/t/ta7bnee7t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3q6uacna"/><path class="ta7bnee7t"/>`,
		"fallback": "energy-icons:panel-left-48",
	});
}

export default Component;
