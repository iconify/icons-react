import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mke4hgbon.css';
import '../../css/a/aq74xvq3f.css';
import '../../css/n/nygqum6ch.css';
import '../../css/p/p6kkucc_v.css';
import '../../css/k/kilulhtev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mke4hgbon wm-k"/><path class="aq74xvq3f wm-k"/><path class="nygqum6ch wm-k"/><path class="p6kkucc_v wm-shine"/><path class="kilulhtev wm-deco"/></g>`,
		"fallback": "withicons-anime:pound-sterling",
	});
}

export default Component;
