import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1e17is5k.css';
import '../../css/n/neyxf6b1l.css';
import '../../css/f/fsctxhtnc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1e17is5k"/><path class="neyxf6b1l"/><path class="fsctxhtnc"/>`,
		"fallback": "streamline-pixel:transportation-plane",
	});
}

export default Component;
