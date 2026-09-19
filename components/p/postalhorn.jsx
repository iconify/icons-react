import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvbv_hdmb.css';
import '../../css/d/depymqbpz.css';
import '../../css/x/x2jhonbsw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvbv_hdmb"/><path class="depymqbpz"/><path class="x2jhonbsw"/>`,
		"fallback": "fxemoji:postalhorn",
	});
}

export default Component;
