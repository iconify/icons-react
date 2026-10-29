import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x8dkkqbfb.css';
import '../../css/e/emsx96-no.css';
import '../../css/o/oc1n9gx5w.css';
import '../../css/t/ti54u2g4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k x8dkkqbfb"/><path class="emsx96-no wm-a"/><path class="oc1n9gx5w wm-k"/><path class="ti54u2g4v wm-a"/></g>`,
		"fallback": "withicons:tornado-sketch",
	});
}

export default Component;
