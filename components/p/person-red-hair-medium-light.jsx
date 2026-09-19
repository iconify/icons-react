import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e56v9bc0f.css';
import '../../css/m/mmkv5lbeo.css';
import '../../css/g/gw0j_wbtp.css';
import '../../css/m/m8rtqacmb.css';
import '../../css/h/hdr9guboz.css';
import '../../css/p/ps7z7wb7n.css';
import '../../css/d/d6hsydbgj.css';
import '../../css/p/pa_yjac-e.css';
import '../../css/x/xssxhhjee.css';
import '../../css/h/h63vwabod.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e56v9bc0f"/><path class="mmkv5lbeo"/><path class="gw0j_wbtp"/><path class="m8rtqacmb"/><path class="hdr9guboz"/><path class="ps7z7wb7n"/><path class="d6hsydbgj"/><path class="pa_yjac-e"/><path class="xssxhhjee"/><path class="h63vwabod"/></g>`,
		"fallback": "fluent-emoji-flat:person-red-hair-medium-light",
	});
}

export default Component;
