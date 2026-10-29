import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mrmm6fb7u.css';
import '../../css/o/obko6rb0n.css';
import '../../css/w/wv6vxhb2f.css';
import '../../css/z/z6cp1l9va.css';
import '../../css/i/iovi9ebsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="mrmm6fb7u wm-deco"/><path class="obko6rb0n wm-deco"/><path class="wm-deco wv6vxhb2f"/><path class="z6cp1l9va"/><path class="iovi9ebsz"/></g>`,
		"fallback": "withicons:signal-blueprint",
	});
}

export default Component;
