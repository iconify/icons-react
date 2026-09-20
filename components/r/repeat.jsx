import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni-2a0bqi.css';
import '../../css/l/l78r7fgdc.css';
import '../../css/f/f39hclbhm.css';
import '../../css/o/opcti8bmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni-2a0bqi"/><path class="l78r7fgdc"/><path class="f39hclbhm"/><path class="opcti8bmj"/>`,
		"fallback": "uim:repeat",
	});
}

export default Component;
