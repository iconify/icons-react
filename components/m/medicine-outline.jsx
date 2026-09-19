import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s6cukem8f.css';
import '../../css/b/bvdi23b-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="medicine-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="s6cukem8f"/><path class="bvdi23b-c"/></g></g>`,
		"fallback": "cuida:medicine-outline",
	});
}

export default Component;
