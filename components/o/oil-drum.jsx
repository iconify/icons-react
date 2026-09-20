import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy4f4tdmp.css';
import '../../css/d/di45v_bru.css';
import '../../css/b/bzswb8b6a.css';
import '../../css/d/d2db97k3l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy4f4tdmp"/><path class="di45v_bru"/><path class="bzswb8b6a"/><path class="d2db97k3l"/>`,
		"fallback": "openmoji:oil-drum",
	});
}

export default Component;
