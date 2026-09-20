import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dd0hsobqz.css';
import '../../css/a/ao9n0fw-c.css';
import '../../css/s/s71-vlbwt.css';
import '../../css/y/yxkibnr-k.css';
import '../../css/y/yk-qtowid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dd0hsobqz"/><path class="ao9n0fw-c"/><path class="s71-vlbwt"/><path class="yxkibnr-k"/><path class="yk-qtowid"/></g>`,
		"fallback": "streamline-cyber-color:mobile-phone-text",
	});
}

export default Component;
