import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vurl2xkvg.css';
import '../../css/o/o_5okgbho.css';
import '../../css/z/zoz1gjbxu.css';
import '../../css/i/idz62rlyl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vurl2xkvg"/><path class="o_5okgbho"/><path class="zoz1gjbxu"/><path class="idz62rlyl"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-mage",
	});
}

export default Component;
