import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0z2qwb2g.css';
import '../../css/j/jo51jhayd.css';
import '../../css/y/y95al1bcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0z2qwb2g"/><path clip-rule="evenodd" class="jo51jhayd"/><path clip-rule="evenodd" class="y95al1bcz"/>`,
		"fallback": "token:vvs",
	});
}

export default Component;
