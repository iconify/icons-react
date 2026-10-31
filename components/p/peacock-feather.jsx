import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/p_vt1dbsg.css';
import '../../css/j/jqlxe1bqj.css';
import '../../css/b/bc-1q6zun.css';
import '../../css/m/mjzvuibua.css';
import '../../css/n/n0q8y-b7u.css';
import '../../css/x/x45co_bpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="p_vt1dbsg"/><path class="jqlxe1bqj"/><path class="bc-1q6zun wm-shine"/><path class="mjzvuibua wm-k"/><path class="n0q8y-b7u wm-a"/><path class="wm-deco x45co_bpp"/></g>`,
		"fallback": "withicons-kawaii:peacock-feather",
	});
}

export default Component;
