import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rabb63b3v.css';
import '../../css/a/ayz9hfm5m.css';
import '../../css/s/smb2inp3x.css';
import '../../css/o/offbrxb-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rabb63b3v wm-k"/><path class="ayz9hfm5m wm-k"/><path class="smb2inp3x wm-k"/><path class="offbrxb-v wm-shadow"/></g>`,
		"fallback": "withicons-valentine:server",
	});
}

export default Component;
