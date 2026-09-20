import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx5q4ccjq.css';
import '../../css/x/xzwmdrbrc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx5q4ccjq"/><path class="xzwmdrbrc"/>`,
		"fallback": "streamline-pixel:interface-essential-synchronize-arrows-square-1",
	});
}

export default Component;
