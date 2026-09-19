import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp4d9t4hh.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp4d9t4hh"/>`,
		"fallback": "dinkie-icons:size-text-filled",
	});
}

export default Component;
