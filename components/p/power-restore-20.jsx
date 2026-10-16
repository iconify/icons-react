import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plymhoh3i.css';
import '../../css/d/dxxr-08um.css';
import '../../css/p/pbcox6rvl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plymhoh3i"/><path class="dxxr-08um"/><path class="pbcox6rvl"/>`,
		"fallback": "energy-icons:power-restore-20",
	});
}

export default Component;
