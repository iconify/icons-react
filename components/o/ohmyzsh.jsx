import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzx2lebap.css';
import '../../css/m/mrexazbtc.css';
import '../../css/e/e-qw-wqmo.css';
import '../../css/o/o9wti8bpp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xzx2lebap"/><path class="mrexazbtc"/><path class="e-qw-wqmo"/><path clip-rule="evenodd" class="o9wti8bpp"/>`,
		"fallback": "devicon:ohmyzsh",
	});
}

export default Component;
