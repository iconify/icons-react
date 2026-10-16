import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co28yzgia.css';
import '../../css/i/i0wzpzqff.css';
import '../../css/t/tifg0imgb.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co28yzgia"/><path class="i0wzpzqff"/><path class="tifg0imgb"/><path class="z4sj3ixdz"/>`,
		"fallback": "energy-icons:package-check-48",
	});
}

export default Component;
