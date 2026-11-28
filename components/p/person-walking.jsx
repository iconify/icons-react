import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k6gah1b6z.css';
import '../../css/x/xz0lhz9kk.css';
import '../../css/s/s3k2tyt5e.css';
import '../../css/p/pilhyiqtq.css';
import '../../css/v/vr-afyp_c.css';
import '../../css/v/v772s3bnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k6gah1b6z"/><path class="xz0lhz9kk"/><path class="s3k2tyt5e"/><path class="pilhyiqtq"/><path class="vr-afyp_c"/><path class="v772s3bnh"/></g>`,
		"fallback": "iconaut:person-walking",
	});
}

export default Component;
