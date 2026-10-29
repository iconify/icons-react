import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dmdf19b6r.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/i/igsc02sfs.css';
import '../../css/m/mpivlabzb.css';
import '../../css/p/p4wcr408t.css';
import '../../css/b/bdz19jyxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="dmdf19b6r wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="igsc02sfs wm-k"/><path class="mpivlabzb wm-a"/><path class="p4wcr408t wm-k"/><path class="bdz19jyxt wm-a"/></g>`,
		"fallback": "withicons:repeat-blueprint",
	});
}

export default Component;
