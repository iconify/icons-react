import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk0m0jtxq.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk0m0jtxq"/>`,
		"fallback": "dinkie-icons:ok-hand-sign-small",
	});
}

export default Component;
