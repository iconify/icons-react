import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tm38nebet.css';
import '../../css/y/yeiur6bxn.css';
import '../../css/g/gno7sf6en.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tm38nebet"/><path class="yeiur6bxn"/><path class="gno7sf6en"/></g>`,
		"fallback": "flagpack:jm",
	});
}

export default Component;
