import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl_dgobdx.css';
import '../../css/v/vvtsvebww.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl_dgobdx"/><path class="vvtsvebww"/>`,
		"fallback": "foundation:social-dropbox",
	});
}

export default Component;
