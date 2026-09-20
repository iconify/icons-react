import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6xlo84ma.css';
import '../../css/x/xapspt1er.css';
import '../../css/r/re3vafbfx.css';
import '../../css/l/l_pb9i6ko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x6xlo84ma"/><path class="xapspt1er"/><path class="re3vafbfx"/><path class="l_pb9i6ko"/></g>`,
		"fallback": "streamline-ultimate-color:smart-watch-square",
	});
}

export default Component;
