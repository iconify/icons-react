import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_5_6fbbs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_5_6fbbs"/>`,
		"fallback": "pinhead:pixel-dome-with-flag",
	});
}

export default Component;
