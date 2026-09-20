import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-vtlgbgt.css';
import '../../css/g/gh2oltbob.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-vtlgbgt"/><path class="gh2oltbob"/>`,
		"fallback": "selfhst:iobroker",
	});
}

export default Component;
