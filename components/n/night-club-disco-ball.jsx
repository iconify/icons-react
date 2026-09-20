import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xs-s9fbeh.css';
import '../../css/d/d863zk0-v.css';
import '../../css/e/e0ijyje_z.css';
import '../../css/r/r2jw26tub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xs-s9fbeh"/><path class="d863zk0-v"/><path class="e0ijyje_z"/><path class="r2jw26tub"/></g>`,
		"fallback": "streamline-ultimate-color:night-club-disco-ball",
	});
}

export default Component;
