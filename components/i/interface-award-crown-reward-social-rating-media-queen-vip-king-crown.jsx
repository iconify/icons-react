import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x22sjqb2c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x22sjqb2c"/>`,
		"fallback": "streamline:interface-award-crown-reward-social-rating-media-queen-vip-king-crown",
	});
}

export default Component;
