import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpwa7ebxs.css';
import '../../css/w/wodp_zbmf.css';
import '../../css/w/wr5bbib0e.css';
import '../../css/d/d-6izk9_s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpwa7ebxs"/><path class="wodp_zbmf"/><path class="wr5bbib0e"/><path class="d-6izk9_s"/>`,
		"fallback": "carbon:power-enterprise-pools-metered-capacity-integration",
	});
}

export default Component;
