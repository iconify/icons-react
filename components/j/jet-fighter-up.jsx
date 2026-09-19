import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cilub4bku.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cilub4bku"/>`,
		"fallback": "fa7-solid:jet-fighter-up",
	});
}

export default Component;
