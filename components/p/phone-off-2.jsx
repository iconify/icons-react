import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpmv5nbra.css';
import '../../css/h/h5bun4ehf.css';
import '../../css/h/hm6t7gb2c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpmv5nbra"/><path class="h5bun4ehf"/><path class="hm6t7gb2c"/>`,
		"fallback": "streamline-pixel:phone-off-2",
	});
}

export default Component;
