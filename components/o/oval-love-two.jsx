import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/eqxeviihg.css';
import '../../css/c/czvyu3bip.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="eqxeviihg"/><path class="czvyu3bip"/></g>`,
		"fallback": "icon-park:oval-love-two",
	});
}

export default Component;
