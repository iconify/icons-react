import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aur6z7bmv.css';
import '../../css/s/s4jodsbfs.css';
import '../../css/z/zfharurqh.css';
import '../../css/s/s4yoveb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aur6z7bmv"/><path class="s4jodsbfs"/><path class="zfharurqh"/><path class="s4yoveb4k"/></g>`,
		"fallback": "streamline-cyber-color:signal-2",
	});
}

export default Component;
