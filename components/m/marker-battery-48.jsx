import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9v855hut.css';
import '../../css/j/jueaa4b2t.css';
import '../../css/v/vgbz9zx-x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9v855hut"/><path class="jueaa4b2t"/><path class="vgbz9zx-x"/>`,
		"fallback": "energy-icons:marker-battery-48",
	});
}

export default Component;
