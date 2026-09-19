import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1cux2sax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1cux2sax"/>`,
		"fallback": "cbi:thirdreality",
	});
}

export default Component;
