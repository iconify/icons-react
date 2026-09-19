import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb4fi6bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb4fi6bgk"/>`,
		"fallback": "cbi:pillar-turaco-tall",
	});
}

export default Component;
