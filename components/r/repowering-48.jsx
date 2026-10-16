import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtwe4hbwm.css';
import '../../css/g/gqd57kb3d.css';
import '../../css/w/wwcd6gb5z.css';
import '../../css/e/eybhbr1eg.css';
import '../../css/n/n7ksxccep.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtwe4hbwm"/><path class="gqd57kb3d"/><path class="wwcd6gb5z"/><path class="eybhbr1eg"/><path class="n7ksxccep"/>`,
		"fallback": "energy-icons:repowering-48",
	});
}

export default Component;
