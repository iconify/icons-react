import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e41ewtu4w.css';
import '../../css/u/ugu7c3b_j.css';
import '../../css/n/n1g7deb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e41ewtu4w"/><path class="ugu7c3b_j"/><path class="n1g7deb0r"/>`,
		"fallback": "gcp:retail-api",
	});
}

export default Component;
