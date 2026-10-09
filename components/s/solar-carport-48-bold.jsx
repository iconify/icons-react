import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u37j8eblv.css';
import '../../css/b/bj00cy14m.css';
import '../../css/h/hmvn1yvxd.css';
import '../../css/z/zkrdz4b4r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u37j8eblv"/><path class="bj00cy14m"/><path class="hmvn1yvxd"/><path class="zkrdz4b4r"/>`,
		"fallback": "energy-icons:solar-carport-48-bold",
	});
}

export default Component;
