import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qaychqqjn.css';
import '../../css/a/al3btpgqx.css';
import '../../css/s/szxu1c91m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qaychqqjn"/><path class="al3btpgqx"/><path class="szxu1c91m"/></g>`,
		"fallback": "hugeicons:keffiyeh",
	});
}

export default Component;
