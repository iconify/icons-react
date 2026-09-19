import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj4ta2cbo.css';
import '../../css/t/t4yq35mvs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj4ta2cbo"/><path class="t4yq35mvs"/>`,
		"fallback": "carbon:location-star-filled",
	});
}

export default Component;
