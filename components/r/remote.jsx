import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk_ui4beu.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk_ui4beu"/>`,
		"fallback": "whh:remote",
	});
}

export default Component;
