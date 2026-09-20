import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jq2vn7bgu.css';
import '../../css/d/d1sm-wb6c.css';
import '../../css/k/kz0zpobfk.css';
import '../../css/u/u_sd4s4wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jq2vn7bgu"/><path class="d1sm-wb6c"/><path class="kz0zpobfk"/><path class="u_sd4s4wm"/></g>`,
		"fallback": "tabler:recycle",
	});
}

export default Component;
