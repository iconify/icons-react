import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6msedb6h.css';
import '../../css/n/nj4qa7bla.css';
import '../../css/x/xorxv8l3z.css';
import '../../css/r/ro6dfbb8k.css';
import '../../css/r/r2i9-3b3d.css';
import '../../css/u/uu6b220vb.css';
import '../../css/x/xsz2__blu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6msedb6h"/><path class="nj4qa7bla"/><path class="xorxv8l3z"/><path class="ro6dfbb8k"/><path class="r2i9-3b3d"/><path class="uu6b220vb"/><path class="xsz2__blu"/>`,
		"fallback": "selfhst:rackpeek-dark",
	});
}

export default Component;
