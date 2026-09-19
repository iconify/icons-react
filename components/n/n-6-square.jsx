import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb865obzs.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb865obzs"/>`,
		"fallback": "zmdi:n-6-square",
	});
}

export default Component;
