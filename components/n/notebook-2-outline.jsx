import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s94wizb4p.css';
import '../../css/a/a2vumeq3o.css';
import '../../css/s/s3m1l3b4t.css';
import '../../css/u/u4_xj9blu.css';
import '../../css/u/u7mfpjuoc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s94wizb4p"/><path class="a2vumeq3o"/><path class="s3m1l3b4t"/><path class="u4_xj9blu"/><path clip-rule="evenodd" class="u7mfpjuoc"/>`,
		"fallback": "solar:notebook-2-outline",
	});
}

export default Component;
