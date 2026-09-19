import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/poyl9bqjz.css';
import '../../css/l/ld6jjrbyc.css';
import '../../css/q/q9s3y8uha.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="poyl9bqjz"/><circle class="ld6jjrbyc"/><path class="q9s3y8uha"/></g>`,
		"fallback": "icon-park-outline:waistline",
	});
}

export default Component;
