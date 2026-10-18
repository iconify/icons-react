import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu8t0abam.css';
import '../../css/x/xza3bhasw.css';
import '../../css/o/o_31o9eni.css';
import '../../css/q/qkjz_qlzf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu8t0abam"/><path class="xza3bhasw"/><path class="o_31o9eni"/><path class="qkjz_qlzf"/>`,
		"fallback": "energy-icons:net-metering-48-bold",
	});
}

export default Component;
