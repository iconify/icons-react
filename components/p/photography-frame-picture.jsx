import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a814z2b1q.css';
import '../../css/t/tu450gbwv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a814z2b1q"/><path class="tu450gbwv"/>`,
		"fallback": "streamline-pixel:photography-frame-picture",
	});
}

export default Component;
