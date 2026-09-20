import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rtx251bom.css';
import '../../css/n/nlphxmb-d.css';
import '../../css/n/naxy12bew.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rtx251bom"/><path clip-rule="evenodd" class="nlphxmb-d"/><path class="naxy12bew"/></g>`,
		"fallback": "streamline-flex-color:user-queen-crown-flat",
	});
}

export default Component;
