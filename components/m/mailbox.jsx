import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/et7729bnj.css';
import '../../css/b/bwh96ncgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="et7729bnj"/><path class="bwh96ncgg"/></g>`,
		"fallback": "lucide:mailbox",
	});
}

export default Component;
