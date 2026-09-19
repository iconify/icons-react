import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owmzy3k6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owmzy3k6g"/>`,
		"fallback": "cbi:ovo",
	});
}

export default Component;
