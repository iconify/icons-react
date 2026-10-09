import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6rccpbxu.css';
import '../../css/j/jh8uq2e7m.css';
import '../../css/n/nl2f48bzi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6rccpbxu"/><path class="jh8uq2e7m"/><path class="nl2f48bzi"/>`,
		"fallback": "energy-icons:plug-48-bold",
	});
}

export default Component;
