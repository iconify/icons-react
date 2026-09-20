import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs16rbccl.css';
import '../../css/t/t9suffddk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs16rbccl"/><path class="t9suffddk"/>`,
		"fallback": "selfhst:proxcenter",
	});
}

export default Component;
