import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1ds-6sfp.css';
import '../../css/p/p_sp1no_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1ds-6sfp"/><path clip-rule="evenodd" class="p_sp1no_z"/>`,
		"fallback": "qlementine-icons:sort-ranking-desc-24",
	});
}

export default Component;
