import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcub6eb4b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcub6eb4b"/>`,
		"fallback": "energy-icons:plane-landing-48",
	});
}

export default Component;
