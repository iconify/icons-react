import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/onff9kbcz.css';
import '../../css/a/auf36vbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="onff9kbcz"/><path class="auf36vbch"/></g>`,
		"fallback": "coolicons:list-tree-duocolor-round",
	});
}

export default Component;
