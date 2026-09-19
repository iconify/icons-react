import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxqh5fbli.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxqh5fbli"/>`,
		"fallback": "dinkie-icons:speech-balloon-heart-small-filled",
	});
}

export default Component;
