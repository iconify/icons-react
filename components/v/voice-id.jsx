import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v3uzvjv2v.css';
import '../../css/g/g01_aubfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v3uzvjv2v"/><path class="g01_aubfn"/></g>`,
		"fallback": "streamline-ultimate-color:voice-id",
	});
}

export default Component;
