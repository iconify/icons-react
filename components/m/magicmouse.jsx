import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzkh3bczm.css';
import '../../css/k/kic1kiyda.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qzkh3bczm"/><circle class="kic1kiyda"/>`,
		"fallback": "flat-ui:magicmouse",
	});
}

export default Component;
