import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/r/rky9ux38x.css';
import '../../css/p/p04mk7bzj.css';
import '../../css/x/xvkzbpb0a.css';
import '../../css/r/ru3z26bcs.css';
import '../../css/v/v_1mpd-hl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="rky9ux38x"/><path class="p04mk7bzj wm-shine"/><path class="xvkzbpb0a"/><path class="ru3z26bcs"/><path class="v_1mpd-hl"/></g>`,
		"fallback": "withicons-kawaii:user",
	});
}

export default Component;
