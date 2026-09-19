import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz4t6jbgp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz4t6jbgp"/>`,
		"fallback": "ion:tablet-landscape-sharp",
	});
}

export default Component;
