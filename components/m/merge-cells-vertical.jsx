import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkaguab1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkaguab1f"/>`,
		"fallback": "ri:merge-cells-vertical",
	});
}

export default Component;
