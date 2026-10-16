import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmx6sugjg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmx6sugjg"/>`,
		"fallback": "energy-icons:three-phase-48",
	});
}

export default Component;
