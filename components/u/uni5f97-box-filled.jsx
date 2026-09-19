import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl4bzbcjv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl4bzbcjv"/>`,
		"fallback": "dinkie-icons:uni5f97-box-filled",
	});
}

export default Component;
