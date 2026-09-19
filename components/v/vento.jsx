import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv5zpjb7q.css';
import '../../css/z/zpye_6bpo.css';
import '../../css/c/cq1cnpxnw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv5zpjb7q"/><path class="zpye_6bpo"/><path class="cq1cnpxnw"/>`,
		"fallback": "catppuccin:vento",
	});
}

export default Component;
