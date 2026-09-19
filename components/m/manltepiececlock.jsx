import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg809gbzw.css';
import '../../css/t/tmzfn5bmd.css';
import '../../css/n/ng9x56bxd.css';
import '../../css/r/rjpe63b-s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg809gbzw"/><path class="tmzfn5bmd"/><path class="ng9x56bxd"/><path class="rjpe63b-s"/>`,
		"fallback": "fxemoji:manltepiececlock",
	});
}

export default Component;
