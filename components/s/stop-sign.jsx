import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kkdr79bop.css';
import '../../css/a/ah-vqkbix.css';
import '../../css/y/yjvkyac7r.css';
import '../../css/f/fyjdfsbsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kkdr79bop"/><path class="ah-vqkbix"/><path class="yjvkyac7r"/><path class="fyjdfsbsb"/></g>`,
		"fallback": "streamline-ultimate-color:stop-sign",
	});
}

export default Component;
