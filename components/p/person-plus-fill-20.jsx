import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klg708bis.css';
import '../../css/n/nib5s-byi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klg708bis"/><path class="nib5s-byi"/>`,
		"fallback": "garden:person-plus-fill-20",
	});
}

export default Component;
