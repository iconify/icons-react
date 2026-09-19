import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnc0q-9gr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jnc0q-9gr"/>`,
		"fallback": "healthicons:sling",
	});
}

export default Component;
