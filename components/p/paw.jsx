import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q36cthbzp.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q36cthbzp"/>`,
		"fallback": "f7:paw",
	});
}

export default Component;
