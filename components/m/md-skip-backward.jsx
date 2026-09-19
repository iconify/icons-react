import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t__y3ywkr.css';
import '../../css/o/ocjdsognq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t__y3ywkr"/><path class="ocjdsognq"/>`,
		"fallback": "ion:md-skip-backward",
	});
}

export default Component;
