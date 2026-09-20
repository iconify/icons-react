import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/naoa_8k8t.css';
import '../../css/r/rjhgegb1n.css';
import '../../css/w/wu-fadpva.css';
import '../../css/c/c3ie0hbjn.css';
import '../../css/k/kimw79mkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="naoa_8k8t"/><path class="rjhgegb1n"/><path class="wu-fadpva"/><path class="c3ie0hbjn"/><path class="kimw79mkp"/></g>`,
		"fallback": "streamline-ultimate-color:network-users",
	});
}

export default Component;
