import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skpvnv86r.css';
import '../../css/l/lrldwibcs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skpvnv86r"/><path class="lrldwibcs"/>`,
		"fallback": "ion:trending-up",
	});
}

export default Component;
