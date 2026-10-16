import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9v855hut.css';
import '../../css/x/xs8ua7-4a.css';
import '../../css/c/c_yb27byc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9v855hut"/><path class="xs8ua7-4a"/><path class="c_yb27byc"/>`,
		"fallback": "energy-icons:marker-nuclear-48",
	});
}

export default Component;
