import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxzz-cb7f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxzz-cb7f"/>`,
		"fallback": "ion:md-business",
	});
}

export default Component;
