import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0uvq1byx.css';
import '../../css/h/hijad5bip.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0uvq1byx"/><path class="hijad5bip"/>`,
		"fallback": "selfhst:storybook-light",
	});
}

export default Component;
