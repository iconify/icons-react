import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wfsy8ybet.css';
import '../../css/n/nb7rj3maz.css';
import '../../css/e/em_48cbtk.css';
import '../../css/d/dpf0383bw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="wfsy8ybet"/><path class="nb7rj3maz"/><path class="em_48cbtk"/><path class="dpf0383bw"/></g>`,
		"fallback": "streamline-cyber:movie-camera-2",
	});
}

export default Component;
