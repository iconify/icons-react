import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaaeg5bei.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaaeg5bei"/>`,
		"fallback": "memory:menu-top-left",
	});
}

export default Component;
