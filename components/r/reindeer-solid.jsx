import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a8lloeb_x.css';
import '../../css/n/nbfrcpb6h.css';
import '../../css/a/abp85p0nn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="a8lloeb_x"/><path class="nbfrcpb6h wm-a"/><path class="abp85p0nn wm-s"/></g>`,
		"fallback": "withicons:reindeer-solid",
	});
}

export default Component;
