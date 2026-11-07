import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6j569bdk.css';
import '../../css/l/l9hde_zgu.css';
import '../../css/b/bvzc07axr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6j569bdk"/><path class="l9hde_zgu"/><path class="bvzc07axr"/>`,
		"fallback": "solar:routing-bold-duotone",
	});
}

export default Component;
