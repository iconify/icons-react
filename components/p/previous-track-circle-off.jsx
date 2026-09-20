import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kqijdyo9f.css';
import '../../css/u/uhwaexb9v.css';
import '../../css/y/yz3i-iodf.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kqijdyo9f"/><path clip-rule="evenodd" class="uhwaexb9v"/><path clip-rule="evenodd" class="yz3i-iodf"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:previous-track-circle-off",
	});
}

export default Component;
