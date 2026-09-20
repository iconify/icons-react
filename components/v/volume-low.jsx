import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu88th.css';
import '../../css/s/so-from-34.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu88th"/>`,
		"fallback": "line-md:volume-low",
	});
}

export default Component;
