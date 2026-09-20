import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixj357rxr.css';
import '../../css/z/zauqecc_x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixj357rxr"/><path class="zauqecc_x"/>`,
		"fallback": "octicon:issue-opened-16",
	});
}

export default Component;
