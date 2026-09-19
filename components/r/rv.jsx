import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/alp7xrb4q.css';
import '../../css/g/g6lp7acdk.css';
import '../../css/b/b2bxplbwo.css';
import '../../css/x/xu-zhibit.css';
import '../../css/f/fh_crz1ad.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="alp7xrb4q"/><rect class="g6lp7acdk"/><path class="b2bxplbwo"/><rect class="xu-zhibit"/><path class="fh_crz1ad"/></g>`,
		"fallback": "glyphs-poly:rv",
	});
}

export default Component;
