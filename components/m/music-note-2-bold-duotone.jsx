import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8i3b9xno.css';
import '../../css/x/xbxy7ib5r.css';
import '../../css/c/c0tgf1saz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8i3b9xno"/><path class="xbxy7ib5r"/><path class="c0tgf1saz"/>`,
		"fallback": "solar:music-note-2-bold-duotone",
	});
}

export default Component;
