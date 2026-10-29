import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v0jfpwl4b.css';
import '../../css/l/lwyv-mb2r.css';
import '../../css/q/qq5frsb4s.css';
import '../../css/y/y5qw9jris.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v0jfpwl4b"/><path class="lwyv-mb2r wm-a"/><path class="qq5frsb4s wm-k"/><path class="wm-a y5qw9jris"/></g>`,
		"fallback": "withicons:taxi-sketch",
	});
}

export default Component;
