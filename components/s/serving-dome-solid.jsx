import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1optmbbp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r1optmbbp"/>`,
		"fallback": "streamline:serving-dome-solid",
	});
}

export default Component;
