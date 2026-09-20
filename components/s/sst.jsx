import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slaia1q8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slaia1q8b"/>`,
		"fallback": "thesvg:sst",
	});
}

export default Component;
