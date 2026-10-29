import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/eilaor5sk.css';
import '../../css/g/gcin3db2u.css';
import '../../css/l/l3413q35g.css';
import '../../css/g/gb7a2eocn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="eilaor5sk wm-k"/><path class="gcin3db2u wm-a"/><path class="l3413q35g"/><path class="gb7a2eocn"/></g>`,
		"fallback": "withicons-bauhaus:mandarin-orange",
	});
}

export default Component;
