import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qm838gbwq.css';
import '../../css/p/pzzktys8z.css';
import '../../css/i/is1-wibjb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qm838gbwq"/><path class="pzzktys8z"/><path class="is1-wibjb"/></g>`,
		"fallback": "streamline-color:play-list-9-flat",
	});
}

export default Component;
