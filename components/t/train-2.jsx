import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lc6twwb3j.css';
import '../../css/j/jojtwt6vv.css';
import '../../css/x/x6asep9kq.css';
import '../../css/x/xd80u42ry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lc6twwb3j"/><path class="jojtwt6vv"/><path class="x6asep9kq"/><path class="xd80u42ry"/></g>`,
		"fallback": "streamline-cyber-color:train-2",
	});
}

export default Component;
