import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fmdq55b7z.css';
import '../../css/s/smqvhfu5m.css';
import '../../css/j/j379bzbxd.css';
import '../../css/s/sei9facvr.css';
import '../../css/h/hzn6a7bod.css';
import '../../css/x/x1877xbqt.css';
import '../../css/r/r46ls3b3s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fmdq55b7z"/><path class="smqvhfu5m"/><path class="j379bzbxd"/><path class="sei9facvr"/><path class="hzn6a7bod"/><path class="x1877xbqt"/><path class="r46ls3b3s"/></g>`,
		"fallback": "icon-park:sunny",
	});
}

export default Component;
