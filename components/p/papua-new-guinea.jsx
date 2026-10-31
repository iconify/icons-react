import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f01x5xj_a.css';
import '../../css/n/nevs5g1iv.css';
import '../../css/c/c82dc_b6t.css';
import '../../css/n/nq5xr2_5i.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f01x5xj_a"/><path class="nevs5g1iv"/><path class="c82dc_b6t"/><path class="nq5xr2_5i"/>`,
		"fallback": "tabler-flags:papua-new-guinea",
	});
}

export default Component;
