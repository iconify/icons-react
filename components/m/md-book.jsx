import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zshchnb6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zshchnb6d"/>`,
		"fallback": "ion:md-book",
	});
}

export default Component;
