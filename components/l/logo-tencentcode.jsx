import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucc5fhbeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucc5fhbeq"/>`,
		"fallback": "tdesign:logo-tencentcode",
	});
}

export default Component;
