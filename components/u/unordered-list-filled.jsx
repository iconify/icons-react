import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o5dnc48bh.css';
import '../../css/e/em3y75frz.css';
import '../../css/p/pqc8yuf2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="o5dnc48bh"/><circle class="em3y75frz"/><path class="pqc8yuf2e"/></g>`,
		"fallback": "reicon:unordered-list-filled",
	});
}

export default Component;
