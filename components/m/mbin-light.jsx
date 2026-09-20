import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhu35gblw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhu35gblw"/>`,
		"fallback": "selfhst:mbin-light",
	});
}

export default Component;
