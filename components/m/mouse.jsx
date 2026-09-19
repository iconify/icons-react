import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmre2ec2x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmre2ec2x"/>`,
		"fallback": "game-icons:mouse",
	});
}

export default Component;
