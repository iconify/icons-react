import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z182-6axt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z182-6axt"/>`,
		"fallback": "selfhst:self-hosted-show-dark",
	});
}

export default Component;
