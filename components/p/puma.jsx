import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syfb_ccgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syfb_ccgg"/>`,
		"fallback": "thesvg-color:puma",
	});
}

export default Component;
