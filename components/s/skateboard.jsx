import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp78ehb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yp78ehb_b"/>`,
		"fallback": "reicon:skateboard",
	});
}

export default Component;
