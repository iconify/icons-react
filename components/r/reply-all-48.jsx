import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdxdnnz1r.css';
import '../../css/p/pggd_gbcs.css';
import '../../css/r/r-m9obb9e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdxdnnz1r"/><path class="pggd_gbcs"/><path class="r-m9obb9e"/>`,
		"fallback": "energy-icons:reply-all-48",
	});
}

export default Component;
