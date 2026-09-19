import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/u/uuky_gise.css';
import '../../css/l/l5im_1b7p.css';
import '../../css/t/tkf4ddvli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="uuky_gise"/><path class="l5im_1b7p"/><path class="tkf4ddvli"/></g>`,
		"fallback": "iconamoon:kissing-face-light",
	});
}

export default Component;
