import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mc_00rb9f.css';
import '../../css/b/briea6bwa.css';
import '../../css/f/f2n-x_-xs.css';
import '../../css/g/ggt5zd62s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mc_00rb9f"/><path class="briea6bwa"/><path class="f2n-x_-xs"/><path class="ggt5zd62s"/></g>`,
		"fallback": "streamline-cyber-color:microphone-mute",
	});
}

export default Component;
