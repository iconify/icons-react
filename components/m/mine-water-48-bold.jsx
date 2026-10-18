import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-8-n5brx.css';
import '../../css/u/uv7uxpbju.css';
import '../../css/o/odn04e7iv.css';
import '../../css/i/i5hs3-3ub.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-8-n5brx"/><path class="uv7uxpbju"/><path class="odn04e7iv"/><path class="i5hs3-3ub"/>`,
		"fallback": "energy-icons:mine-water-48-bold",
	});
}

export default Component;
