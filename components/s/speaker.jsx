import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/ue-e6sq2m.css';
import '../../css/y/yzko-bq0s.css';
import '../../css/x/x3oxcxpbo.css';
import '../../css/c/cjd02tb-f.css';
import '../../css/z/zfrcmvb1o.css';
import '../../css/x/x96coqb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ue-e6sq2m wm-shadow"/><path class="yzko-bq0s"/><path class="x3oxcxpbo"/><path class="cjd02tb-f"/><path class="wm-shine zfrcmvb1o"/><path class="wm-deco x96coqb1v"/></g>`,
		"fallback": "withicons-sticker:speaker",
	});
}

export default Component;
