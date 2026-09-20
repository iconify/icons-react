import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwfsuvb7r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwfsuvb7r"/>`,
		"fallback": "streamline-plump:reduced-inequalities",
	});
}

export default Component;
