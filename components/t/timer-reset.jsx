import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/a8bpyzb4f.css';
import '../../css/y/y08bbdcxe.css';
import '../../css/h/hr7v-vbfi.css';
import '../../css/o/op091ia4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="a8bpyzb4f"/><path class="wm-k y08bbdcxe"/><path class="hr7v-vbfi wm-a"/><path class="op091ia4u wm-deco"/></g>`,
		"fallback": "withicons-kawaii:timer-reset",
	});
}

export default Component;
