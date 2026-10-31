import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/x/x-tp0_soj.css';
import '../../css/q/qrlg7vb3j.css';
import '../../css/v/v3bzhxbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wm-k x-tp0_soj"/><path class="qrlg7vb3j wm-a"/><path class="v3bzhxbbh wm-deco"/></g>`,
		"fallback": "withicons-kawaii:subscript",
	});
}

export default Component;
