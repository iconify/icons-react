import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_kea9vfg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_kea9vfg"/>`,
		"fallback": "pinhead:person-swimming-in-waters",
	});
}

export default Component;
