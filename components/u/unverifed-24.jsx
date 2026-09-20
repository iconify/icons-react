import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3421lj_w.css';
import '../../css/n/nn46n-pqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3421lj_w"/><path class="nn46n-pqq"/>`,
		"fallback": "octicon:unverifed-24",
	});
}

export default Component;
