import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbivy8bqx.css';

const viewBox = {"width":800,"height":790,"left":200,"top":206};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbivy8bqx"/>`,
		"fallback": "thesvg-color:react-aria",
	});
}

export default Component;
