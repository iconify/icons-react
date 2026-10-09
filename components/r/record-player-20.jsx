import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-y598bgk.css';
import '../../css/c/cuw48wy1a.css';
import '../../css/u/u5cct483i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-y598bgk"/><path class="cuw48wy1a"/><path class="u5cct483i"/>`,
		"fallback": "energy-icons:record-player-20",
	});
}

export default Component;
