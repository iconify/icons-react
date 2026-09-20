import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v5utkwpev.css';
import '../../css/t/tnv-jyppq.css';
import '../../css/a/aa_8nabpp.css';
import '../../css/k/kevvvebtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v5utkwpev"/><path class="tnv-jyppq"/><path class="aa_8nabpp"/><path class="kevvvebtr"/></g>`,
		"fallback": "streamline-cyber-color:watch-1",
	});
}

export default Component;
