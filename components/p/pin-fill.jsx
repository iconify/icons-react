import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lelvr5blt.css';
import '../../css/t/troxz-_lw.css';
import '../../css/p/pu0y4pgpa.css';
import '../../css/p/p48ewxbal.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lelvr5blt"/><path class="troxz-_lw"/><path class="pu0y4pgpa"/><path class="p48ewxbal"/>`,
		"fallback": "cuida:pin-fill",
	});
}

export default Component;
