import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i00v-b3kp.css';
import '../../css/x/xehdjeb4b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i00v-b3kp"/><path class="xehdjeb4b"/>`,
		"fallback": "energy-icons:panel-left-open-20-bold",
	});
}

export default Component;
