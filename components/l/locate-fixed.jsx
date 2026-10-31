import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/u/uwyyqihgf.css';
import '../../css/z/zeld57-ls.css';
import '../../css/l/lljkmtbvj.css';
import '../../css/v/v9kvji8te.css';
import '../../css/h/hbi8hhkfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="uwyyqihgf"/><path class="zeld57-ls"/><path class="lljkmtbvj wm-shine"/><path class="v9kvji8te wm-k"/><path class="hbi8hhkfx wm-a"/></g>`,
		"fallback": "withicons-kawaii:locate-fixed",
	});
}

export default Component;
