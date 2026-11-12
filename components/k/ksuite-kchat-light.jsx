import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq9emnlot.css';
import '../../css/k/k70m9f-yz.css';
import '../../css/m/m4ht6ksod.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq9emnlot"/><path class="k70m9f-yz"/><path class="m4ht6ksod"/>`,
		"fallback": "selfhst:ksuite-kchat-light",
	});
}

export default Component;
