import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urww_pbhp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urww_pbhp"/>`,
		"fallback": "fa7-solid:oil-well",
	});
}

export default Component;
