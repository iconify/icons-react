import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dkzh7xq6v.css';
import '../../css/m/m-lsmsbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dkzh7xq6v"/><path class="m-lsmsbpc"/></g>`,
		"fallback": "ginetex:professional-dry-cleaning-in-perchloroethylene-hydrocarbons-heavy-benzines",
	});
}

export default Component;
