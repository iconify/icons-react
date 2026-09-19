import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc5h94boc.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc5h94boc"/>`,
		"fallback": "fa-regular:kiss-beam",
	});
}

export default Component;
