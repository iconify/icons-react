import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v86yx3b6f.css';
import '../../css/f/fne2pdbmz.css';
import '../../css/n/no_pq6-6s.css';
import '../../css/b/b2qohnadj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="v86yx3b6f"/><path class="fne2pdbmz wm-shine"/><path class="no_pq6-6s"/><path class="b2qohnadj wm-deco"/></g>`,
		"fallback": "withicons-kawaii:rewind",
	});
}

export default Component;
