import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/m/mujrfnrcf.css';
import '../../css/s/sdgnimb7u.css';
import '../../css/l/l_roz9bdx.css';
import '../../css/g/gqcvedvsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="mujrfnrcf"/><path class="sdgnimb7u"/><path class="l_roz9bdx"/><path class="gqcvedvsh"/></g>`,
		"fallback": "streamline-sharp-color:play-list-8",
	});
}

export default Component;
