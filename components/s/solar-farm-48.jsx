import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1xv4fk9e.css';
import '../../css/k/kf0yeki3y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1xv4fk9e"/><path class="kf0yeki3y"/>`,
		"fallback": "energy-icons:solar-farm-48",
	});
}

export default Component;
