import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ked3dlbrv.css';
import '../../css/q/qpoa4dbdk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ked3dlbrv"/><path class="qpoa4dbdk"/>`,
		"fallback": "selfhst:munin",
	});
}

export default Component;
