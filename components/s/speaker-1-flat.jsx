import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4ep13bxj.css';
import '../../css/q/q-e10hbbm.css';
import '../../css/v/vto4kkbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p4ep13bxj"/><path class="q-e10hbbm"/><path clip-rule="evenodd" class="vto4kkbzv"/></g>`,
		"fallback": "streamline-sharp-color:speaker-1-flat",
	});
}

export default Component;
