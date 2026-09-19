import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-uqoxsah.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-uqoxsah"/>`,
		"fallback": "icon-park:six",
	});
}

export default Component;
