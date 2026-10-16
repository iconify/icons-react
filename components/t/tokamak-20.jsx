import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgvqv2bst.css';
import '../../css/v/vtc-cfb1t.css';
import '../../css/k/ka-2hq9em.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgvqv2bst"/><path class="vtc-cfb1t"/><path class="ka-2hq9em"/>`,
		"fallback": "energy-icons:tokamak-20",
	});
}

export default Component;
