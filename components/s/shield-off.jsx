import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/z5-q_fb8k.css';
import '../../css/o/o3_bhqdhw.css';
import '../../css/x/xh4551b7j.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/p/p7lia970e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="z5-q_fb8k"/><path class="o3_bhqdhw wm-shine"/><path class="wm-k xh4551b7j"/><path class="qr4ochb5c wm-s"/><path class="p7lia970e wm-deco"/></g>`,
		"fallback": "withicons-kawaii:shield-off",
	});
}

export default Component;
