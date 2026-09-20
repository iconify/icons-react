import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hgihzbcda.css';
import '../../css/a/akyg5n59t.css';
import '../../css/a/am2b0kbai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hgihzbcda"/><path class="akyg5n59t"/><path class="am2b0kbai"/></g>`,
		"fallback": "tdesign:museum-1",
	});
}

export default Component;
