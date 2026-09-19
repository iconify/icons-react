import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r8b-6stnd.css';
import '../../css/w/waljwkoqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tag-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="r8b-6stnd"/><path class="waljwkoqj"/></g></g>`,
		"fallback": "cuida:tag-outline",
	});
}

export default Component;
