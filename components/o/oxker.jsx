import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh0_e8b5g.css';
import '../../css/s/swlytsb8a.css';
import '../../css/a/a1c6c_bxa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh0_e8b5g"/><circle class="swlytsb8a"/><path class="a1c6c_bxa"/>`,
		"fallback": "selfhst:oxker",
	});
}

export default Component;
