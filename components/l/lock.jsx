import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty4pcbcqk.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty4pcbcqk"/>`,
		"fallback": "dinkie-icons:lock",
	});
}

export default Component;
