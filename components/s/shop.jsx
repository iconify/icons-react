import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dh-grkqhx.css';
import '../../css/t/tndk6jbtn.css';
import '../../css/z/znpqvvbqb.css';
import '../../css/k/k4u4q3l9f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="dh-grkqhx"/><path class="tndk6jbtn"/><path class="znpqvvbqb"/><rect class="k4u4q3l9f"/></g>`,
		"fallback": "icon-park:shop",
	});
}

export default Component;
