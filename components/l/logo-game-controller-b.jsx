import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji4dzvl8f.css';
import '../../css/b/bzl494b5p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji4dzvl8f"/><path class="bzl494b5p"/>`,
		"fallback": "ion:logo-game-controller-b",
	});
}

export default Component;
