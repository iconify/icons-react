import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1e1ldbxe.css';
import '../../css/b/beggmnimb.css';
import '../../css/p/psrn3dbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1e1ldbxe"/><path class="beggmnimb"/><path class="psrn3dbdq"/>`,
		"fallback": "gridicons:story",
	});
}

export default Component;
