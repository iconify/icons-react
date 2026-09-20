import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qeqynlb9f.css';
import '../../css/r/rueko6s1l.css';
import '../../css/u/ukxdkhd4n.css';
import '../../css/h/h3tm6fbzo.css';
import '../../css/h/hm-mdac7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qeqynlb9f"/><path class="rueko6s1l"/><path class="ukxdkhd4n"/><path class="h3tm6fbzo"/><path class="hm-mdac7b"/></g>`,
		"fallback": "streamline-ultimate-color:temperature-thermometer-high-alt",
	});
}

export default Component;
