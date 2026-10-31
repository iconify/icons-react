import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sxb4si85g.css';
import '../../css/c/c7vd15b_x.css';
import '../../css/s/syzf4dduc.css';
import '../../css/b/b2bxutlba.css';
import '../../css/n/npjeylbea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="sxb4si85g"/><path class="c7vd15b_x wm-shine"/><path class="syzf4dduc wm-k"/><path class="b2bxutlba wm-a"/><path class="npjeylbea wm-deco"/></g>`,
		"fallback": "withicons-kawaii:map",
	});
}

export default Component;
