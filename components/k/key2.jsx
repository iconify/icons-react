import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cusxm9bkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cusxm9bkm"/>`,
		"fallback": "reicon:key2",
	});
}

export default Component;
