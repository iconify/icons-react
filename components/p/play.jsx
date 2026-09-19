import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r66s6dkud.css';

const viewBox = {"width":898,"height":1026};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r66s6dkud"/>`,
		"fallback": "whh:play",
	});
}

export default Component;
