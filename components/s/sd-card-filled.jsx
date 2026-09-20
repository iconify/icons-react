import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vslx7zj_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vslx7zj_g"/>`,
		"fallback": "tdesign:sd-card-filled",
	});
}

export default Component;
