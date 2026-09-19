import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/u/uuky_gise.css';
import '../../css/n/nkrk3jblq.css';
import '../../css/n/nz2f_9beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="uuky_gise"/><path class="nkrk3jblq"/><path class="nz2f_9beg"/></g>`,
		"fallback": "iconamoon:upside-down-face-light",
	});
}

export default Component;
