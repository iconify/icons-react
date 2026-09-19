import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfxt7ubbp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfxt7ubbp"/>`,
		"fallback": "cil:signal-cellular-0",
	});
}

export default Component;
