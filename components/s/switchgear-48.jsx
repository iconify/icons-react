import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9jb7kaqf.css';
import '../../css/j/jimnbhblw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9jb7kaqf"/><path class="jimnbhblw"/>`,
		"fallback": "energy-icons:switchgear-48",
	});
}

export default Component;
