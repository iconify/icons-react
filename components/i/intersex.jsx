import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvithbb2j.css';

const viewBox = {"width":1408,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvithbb2j"/>`,
		"fallback": "fa:intersex",
	});
}

export default Component;
