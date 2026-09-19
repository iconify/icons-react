import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0svil7kn.css';
import '../../css/q/qi4e_75le.css';
import '../../css/n/n5uwzf69o.css';
import '../../css/z/z_pn00bgb.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0svil7kn"/><path class="qi4e_75le"/><path class="n5uwzf69o"/><path class="z_pn00bgb"/>`,
		"fallback": "fontisto:passport-alt",
	});
}

export default Component;
