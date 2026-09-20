import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag0ok82cw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag0ok82cw"/>`,
		"fallback": "mdi-light:ungroup",
	});
}

export default Component;
