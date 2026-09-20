import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is8se_vww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="is8se_vww"/>`,
		"fallback": "reicon:soundwave-square",
	});
}

export default Component;
