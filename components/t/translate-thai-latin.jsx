import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgyph7b6v.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgyph7b6v"/>`,
		"fallback": "dinkie-icons:translate-thai-latin",
	});
}

export default Component;
