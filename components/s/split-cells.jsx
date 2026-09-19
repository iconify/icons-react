import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/m/mrn7enbng.css';
import '../../css/g/g9r39gvnp.css';
import '../../css/b/bz1fy_e_x.css';
import '../../css/n/n8lhwfb5g.css';
import '../../css/b/bnw422bgz.css';
import '../../css/j/j_-fbdbaf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="mrn7enbng"/><path class="g9r39gvnp"/><path class="bz1fy_e_x"/><path class="n8lhwfb5g"/><path class="bnw422bgz"/><path class="j_-fbdbaf"/></g>`,
		"fallback": "icon-park:split-cells",
	});
}

export default Component;
