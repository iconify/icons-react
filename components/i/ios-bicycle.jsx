import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv9o7hb4h.css';
import '../../css/b/bpl-meb0s.css';
import '../../css/i/ic--wlbit.css';
import '../../css/p/pmf4o37fj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv9o7hb4h"/><path class="bpl-meb0s"/><path class="ic--wlbit"/><path class="pmf4o37fj"/>`,
		"fallback": "ion:ios-bicycle",
	});
}

export default Component;
