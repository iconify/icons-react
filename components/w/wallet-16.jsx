import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoj6c4bvx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xoj6c4bvx"/>`,
		"fallback": "qlementine-icons:wallet-16",
	});
}

export default Component;
