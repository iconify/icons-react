import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywefrh12i.css';
import '../../css/x/xix09wbue.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywefrh12i"/><path class="xix09wbue"/>`,
		"fallback": "streamline-pixel:interface-essential-touch-id-smartphone",
	});
}

export default Component;
