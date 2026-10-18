import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xszfmab4u.css';
import '../../css/h/hutzz7vvf.css';
import '../../css/b/b-qq9xb5i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xszfmab4u"/><path class="hutzz7vvf"/><path class="b-qq9xb5i"/>`,
		"fallback": "energy-icons:solar-monitoring-48",
	});
}

export default Component;
