import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnkwirboe.css';
import '../../css/b/blf1u3bly.css';
import '../../css/n/n78mm0b9y.css';
import '../../css/e/e586vbbsn.css';
import '../../css/o/ojvxcabbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cnkwirboe"/><path class="blf1u3bly"/><path class="n78mm0b9y"/><path class="e586vbbsn"/><path class="ojvxcabbn"/></g>`,
		"fallback": "streamline-ultimate-color:laundry-hand-wash",
	});
}

export default Component;
