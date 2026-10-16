import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu-_06bfk.css';
import '../../css/q/qzu5cgzuy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu-_06bfk"/><path class="qzu5cgzuy"/>`,
		"fallback": "energy-icons:nodule-48",
	});
}

export default Component;
