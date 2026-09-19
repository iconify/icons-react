import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/u/u_zop0cpq.css';
import '../../css/u/u5sw-_ufh.css';
import '../../css/t/tisypqxzp.css';
import '../../css/f/fo_p2p1mo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="u_zop0cpq"/><path class="u5sw-_ufh"/><path class="tisypqxzp"/><path class="fo_p2p1mo"/></g>`,
		"fallback": "icon-park-outline:sunbath",
	});
}

export default Component;
