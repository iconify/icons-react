import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iau0sn_fp.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iau0sn_fp"/>`,
		"fallback": "memory:login",
	});
}

export default Component;
