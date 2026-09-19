import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bgbgz_9qm.css';
import '../../css/k/kvlygp98w.css';
import '../../css/b/bnx5w9hsf.css';
import '../../css/p/pbzdigbbc.css';
import '../../css/d/dtyk4lgvh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bgbgz_9qm"/><path class="kvlygp98w"/><path class="bnx5w9hsf"/><path class="pbzdigbbc"/><path class="dtyk4lgvh"/></g>`,
		"fallback": "icon-park-solid:rope-skipping",
	});
}

export default Component;
