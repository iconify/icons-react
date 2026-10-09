import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv842m9yr.css';
import '../../css/z/z8b5h_-hd.css';
import '../../css/i/i42_48y_v.css';
import '../../css/n/n6r65nvvk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv842m9yr"/><path class="z8b5h_-hd"/><path class="i42_48y_v"/><path class="n6r65nvvk"/>`,
		"fallback": "energy-icons:lever-20-bold",
	});
}

export default Component;
