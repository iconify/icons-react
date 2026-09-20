import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szxpzob-w.css';
import '../../css/n/nhk3unbbd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szxpzob-w"/><path class="nhk3unbbd"/>`,
		"fallback": "streamline-pixel:user-man-love",
	});
}

export default Component;
