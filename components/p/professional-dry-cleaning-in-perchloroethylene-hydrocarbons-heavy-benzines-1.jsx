import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w833lb9ei.css';
import '../../css/p/ppq8jkh-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w833lb9ei"/><path class="ppq8jkh-j"/></g>`,
		"fallback": "ginetex:professional-dry-cleaning-in-perchloroethylene-hydrocarbons-heavy-benzines-1",
	});
}

export default Component;
