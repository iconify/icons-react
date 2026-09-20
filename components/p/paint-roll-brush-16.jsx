import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at62glbnv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="at62glbnv"/>`,
		"fallback": "qlementine-icons:paint-roll-brush-16",
	});
}

export default Component;
