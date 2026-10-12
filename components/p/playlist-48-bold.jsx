import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t85dv3bhf.css';
import '../../css/h/hvlek604j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t85dv3bhf"/><path class="hvlek604j"/>`,
		"fallback": "energy-icons:playlist-48-bold",
	});
}

export default Component;
