import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l3jpuvbou.css';
import '../../css/b/b96cb6reh.css';
import '../../css/l/lx-ga5bew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="l3jpuvbou"/><path class="b96cb6reh"/><path class="lx-ga5bew"/></g>`,
		"fallback": "hugeicons:radio",
	});
}

export default Component;
