import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqlf2cjio.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqlf2cjio"/>`,
		"fallback": "dinkie-icons:snail",
	});
}

export default Component;
