import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/v/vugw0v35w.css';
import '../../css/t/tdb8ilu_q.css';
import '../../css/f/frjk08b-g.css';
import '../../css/b/bdhh9gbzq.css';
import '../../css/m/mcmap5bft.css';
import '../../css/p/pz87a1zuo.css';
import '../../css/p/psnhdibbq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><rect class="vugw0v35w"/><path class="tdb8ilu_q"/><path class="frjk08b-g"/><path class="bdhh9gbzq"/><path class="mcmap5bft"/><path class="pz87a1zuo"/><path class="psnhdibbq"/></g>`,
		"fallback": "icon-park:transport",
	});
}

export default Component;
