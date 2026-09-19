import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/d3509cqfa.css';
import '../../css/m/mk_2-uu6l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="d3509cqfa"/><path class="mk_2-uu6l"/></g>`,
		"fallback": "icon-park-outline:upload-two",
	});
}

export default Component;
