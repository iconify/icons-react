import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyefmbdcw.css';
import '../../css/f/fc0n3k16d.css';
import '../../css/u/utv6qqbkb.css';
import '../../css/w/whkqkbbra.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyefmbdcw"/><circle class="fc0n3k16d"/><circle class="utv6qqbkb"/><circle class="whkqkbbra"/>`,
		"fallback": "lineicons:mushroom",
	});
}

export default Component;
