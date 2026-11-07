import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2wgqxb8y.css';
import '../../css/l/lilkeebel.css';
import '../../css/l/lanmsbbod.css';
import '../../css/m/mb4mok-2g.css';
import '../../css/l/ld5ndfs7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2wgqxb8y"/><path class="lilkeebel"/><path class="lanmsbbod"/><path class="mb4mok-2g"/><path class="ld5ndfs7e"/>`,
		"fallback": "solar:notebook-2-bold-duotone",
	});
}

export default Component;
