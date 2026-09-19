import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l87zyvr9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l87zyvr9a"/>`,
		"fallback": "fontisto:record",
	});
}

export default Component;
