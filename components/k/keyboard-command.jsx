import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fiywnjbke.css';
import '../../css/m/m7b9xfmld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fiywnjbke"/><path class="m7b9xfmld"/></g>`,
		"fallback": "streamline-ultimate-color:keyboard-command",
	});
}

export default Component;
