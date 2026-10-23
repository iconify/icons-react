import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3dxnxzfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3dxnxzfj"/>`,
		"fallback": "vadivam:rainbow",
	});
}

export default Component;
