import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwoeytogu.css';
import '../../css/c/cc3fl7wwz.css';
import '../../css/x/xul7skbaf.css';
import '../../css/k/k6fth3b8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwoeytogu"/><circle class="cc3fl7wwz"/><circle class="xul7skbaf"/><circle class="k6fth3b8e"/>`,
		"fallback": "typcn:th-list",
	});
}

export default Component;
