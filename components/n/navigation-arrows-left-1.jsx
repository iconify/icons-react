import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqfh83brs.css';
import '../../css/q/q32ut8wiq.css';
import '../../css/s/sx3vdr7-k.css';
import '../../css/j/jj0igtbyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mqfh83brs"/><path class="q32ut8wiq"/><path class="sx3vdr7-k"/><path class="jj0igtbyr"/></g>`,
		"fallback": "streamline-ultimate-color:navigation-arrows-left-1",
	});
}

export default Component;
