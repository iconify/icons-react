import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc9b90bna.css';
import '../../css/y/ysh5xgerc.css';
import '../../css/p/po0txjbom.css';
import '../../css/n/nl7257qqh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xc9b90bna"><path class="ysh5xgerc"/><ellipse class="po0txjbom"/><path class="nl7257qqh"/></g>`,
		"fallback": "glyphs:music-list-bold",
	});
}

export default Component;
