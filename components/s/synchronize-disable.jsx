import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/q/q46tmpbhq.css';
import '../../css/i/i-gohou0g.css';
import '../../css/o/ok3p2fbwz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="q46tmpbhq"/><path class="i-gohou0g"/><path class="ok3p2fbwz"/></g>`,
		"fallback": "streamline-color:synchronize-disable",
	});
}

export default Component;
