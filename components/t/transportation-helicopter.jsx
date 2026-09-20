import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy9fe6p_r.css';
import '../../css/x/xtw0f8b2d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy9fe6p_r"/><path class="xtw0f8b2d"/>`,
		"fallback": "streamline-pixel:transportation-helicopter",
	});
}

export default Component;
