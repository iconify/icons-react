import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjkt4fvdh.css';
import '../../css/j/jswt5rbrt.css';
import '../../css/u/um2_m_i-t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjkt4fvdh"/><path class="jswt5rbrt"/><path class="um2_m_i-t"/>`,
		"fallback": "ion:ios-bug",
	});
}

export default Component;
