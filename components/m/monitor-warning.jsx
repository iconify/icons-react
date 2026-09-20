import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mokjock6u.css';
import '../../css/y/ydozd7bwp.css';
import '../../css/p/p-jm95b3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mokjock6u"/><path class="ydozd7bwp"/><path class="p-jm95b3r"/></g>`,
		"fallback": "streamline-ultimate:monitor-warning",
	});
}

export default Component;
