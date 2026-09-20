import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbo7c_jnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xbo7c_jnf"/>`,
		"fallback": "reicon:medal-square",
	});
}

export default Component;
