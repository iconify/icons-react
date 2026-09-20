import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2nef2b2z.css';
import '../../css/f/fru8l0jpx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2nef2b2z"/><path class="fru8l0jpx"/>`,
		"fallback": "streamline-block:other-ui-inbox",
	});
}

export default Component;
