import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/h/h9-168bng.css';
import '../../css/b/bgn27ybcw.css';
import '../../css/a/avo6o_jfh.css';
import '../../css/d/duli9cbzd.css';
import '../../css/i/iyg8d3hmh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path clip-rule="evenodd" class="h9-168bng"/><path class="bgn27ybcw"/><path class="avo6o_jfh"/><path clip-rule="evenodd" class="duli9cbzd"/><path class="iyg8d3hmh"/></g>`,
		"fallback": "streamline-kameleon-color:postcard-pop",
	});
}

export default Component;
