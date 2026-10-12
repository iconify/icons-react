import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbqw8r0sh.css';
import '../../css/r/r_zfy8bnu.css';
import '../../css/q/qpbeuubxz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbqw8r0sh"/><path class="r_zfy8bnu"/><path class="qpbeuubxz"/>`,
		"fallback": "energy-icons:split-48",
	});
}

export default Component;
