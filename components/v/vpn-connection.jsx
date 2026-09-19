import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of1ohj7_a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of1ohj7_a"/>`,
		"fallback": "carbon:vpn-connection",
	});
}

export default Component;
