import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n73n-w65q.css';
import '../../css/v/vzk8q3alw.css';
import '../../css/d/dwojr7byb.css';
import '../../css/r/rfxpxtjlq.css';
import '../../css/v/vulww4b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n73n-w65q"/><path class="vzk8q3alw"/><path class="dwojr7byb"/><path class="rfxpxtjlq"/><path class="vulww4b1s"/></g>`,
		"fallback": "streamline-cyber-color:location-map",
	});
}

export default Component;
