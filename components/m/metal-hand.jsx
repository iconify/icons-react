import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn2ngg-tf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn2ngg-tf"/>`,
		"fallback": "game-icons:metal-hand",
	});
}

export default Component;
