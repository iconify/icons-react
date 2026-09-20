import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn9sdzgym.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fn9sdzgym"/>`,
		"fallback": "streamline:user-add-plus-solid",
	});
}

export default Component;
