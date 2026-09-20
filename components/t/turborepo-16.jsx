import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dj9_uubwj.css';
import '../../css/r/rsu7ttl1i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dj9_uubwj"/><path class="rsu7ttl1i"/></g>`,
		"fallback": "nonicons:turborepo-16",
	});
}

export default Component;
