import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbqi1ub-j.css';
import '../../css/b/bfj6lrbfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbqi1ub-j"/><path class="bfj6lrbfk"/>`,
		"fallback": "streamline-ultimate:safety-warning-radioactive-bold",
	});
}

export default Component;
