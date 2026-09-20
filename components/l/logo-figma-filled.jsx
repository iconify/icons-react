import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6-kq4cwx.css';
import '../../css/d/d3bnnkbfx.css';
import '../../css/b/b3ef9_bsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6-kq4cwx"/><path class="d3bnnkbfx"/><path class="b3ef9_bsf"/>`,
		"fallback": "tdesign:logo-figma-filled",
	});
}

export default Component;
