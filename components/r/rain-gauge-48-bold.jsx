import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8syq0b9t.css';
import '../../css/u/uk19ffbww.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8syq0b9t"/><path class="uk19ffbww"/>`,
		"fallback": "energy-icons:rain-gauge-48-bold",
	});
}

export default Component;
