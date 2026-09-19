import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irl9z8uwq.css';
import '../../css/i/ioz8g2bzy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irl9z8uwq"/><path class="ioz8g2bzy"/>`,
		"fallback": "ion:social-html5-outline",
	});
}

export default Component;
