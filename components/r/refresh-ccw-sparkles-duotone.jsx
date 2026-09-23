import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s3ce2sb5q.css';
import '../../css/r/rgyr606zo.css';
import '../../css/z/zk3p-0b1p.css';
import '../../css/p/pz9h9ac8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s3ce2sb5q"/><path class="rgyr606zo"/><path class="zk3p-0b1p"/><path class="pz9h9ac8e"/></g>`,
		"fallback": "keyline-icons:refresh-ccw-sparkles-duotone",
	});
}

export default Component;
