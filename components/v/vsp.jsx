import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiv2irb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiv2irb2d"/>`,
		"fallback": "token:vsp",
	});
}

export default Component;
