import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxjwdfjah.css';
import '../../css/q/qezm96b4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxjwdfjah"/><path class="qezm96b4w"/>`,
		"fallback": "solar:parentheses-outline",
	});
}

export default Component;
