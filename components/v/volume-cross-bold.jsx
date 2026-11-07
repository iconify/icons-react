import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d69tjgb7e.css';
import '../../css/w/wskswwbry.css';
import '../../css/t/tkgxa5i2k.css';
import '../../css/o/o7l_lyvqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d69tjgb7e"/><path clip-rule="evenodd" class="wskswwbry"/><path class="tkgxa5i2k"/><path class="o7l_lyvqj"/>`,
		"fallback": "solar:volume-cross-bold",
	});
}

export default Component;
