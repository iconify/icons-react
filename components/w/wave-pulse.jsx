import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyv8nfhqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyv8nfhqw"/>`,
		"fallback": "reicon:wave-pulse",
	});
}

export default Component;
