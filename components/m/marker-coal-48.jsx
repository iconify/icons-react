import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9v855hut.css';
import '../../css/g/gwim4rbxb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9v855hut"/><path class="gwim4rbxb"/>`,
		"fallback": "energy-icons:marker-coal-48",
	});
}

export default Component;
