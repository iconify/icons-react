import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvc4fj9_h.css';
import '../../css/w/wndfuohsw.css';
import '../../css/y/yhk9bj34h.css';
import '../../css/e/ekvf15bga.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvc4fj9_h"/><path class="wndfuohsw"/><path class="yhk9bj34h"/><path class="ekvf15bga"/>`,
		"fallback": "energy-icons:pressure-gauge-48-bold",
	});
}

export default Component;
