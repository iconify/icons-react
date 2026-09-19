import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sve_pcibh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sve_pcibh"/>`,
		"fallback": "healthicons:magic-wand-outline",
	});
}

export default Component;
