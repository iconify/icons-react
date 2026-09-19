import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1a2q6beh.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1a2q6beh"/>`,
		"fallback": "fontisto:nav-icon-grid",
	});
}

export default Component;
