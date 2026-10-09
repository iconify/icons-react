import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yak9gybyx.css';
import '../../css/f/ftk0oxb7p.css';
import '../../css/z/z2iqjbiby.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yak9gybyx"/><path class="ftk0oxb7p"/><path class="z2iqjbiby"/>`,
		"fallback": "energy-icons:tractor-20-bold",
	});
}

export default Component;
