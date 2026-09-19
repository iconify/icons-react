import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsxmaac5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsxmaac5f"/>`,
		"fallback": "cbi:stan-sport",
	});
}

export default Component;
