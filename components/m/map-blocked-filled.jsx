import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlfrtxgac.css';
import '../../css/v/vkk5k5byr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlfrtxgac"/><path class="vkk5k5byr"/>`,
		"fallback": "tdesign:map-blocked-filled",
	});
}

export default Component;
