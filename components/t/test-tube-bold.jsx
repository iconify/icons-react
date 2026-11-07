import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xre4jslvu.css';
import '../../css/w/wq4oxm77o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xre4jslvu"/><path class="wq4oxm77o"/>`,
		"fallback": "solar:test-tube-bold",
	});
}

export default Component;
