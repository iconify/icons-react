import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djnf_2eav.css';
import '../../css/g/gxlbmp61p.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djnf_2eav"/><path class="gxlbmp61p"/><path class="y9mg2tbzu"/>`,
		"fallback": "energy-icons:lock-check-48-bold",
	});
}

export default Component;
