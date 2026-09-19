import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/m/mhwosdh5o.css';
import '../../css/x/xpua17bdp.css';
import '../../css/p/ple3qktap.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="mhwosdh5o"/><rect class="xpua17bdp"/><path class="ple3qktap"/></g>`,
		"fallback": "icon-park:vertically-centered",
	});
}

export default Component;
