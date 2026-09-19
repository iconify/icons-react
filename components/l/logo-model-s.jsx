import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjxv15xvd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjxv15xvd"/>`,
		"fallback": "ion:logo-model-s",
	});
}

export default Component;
