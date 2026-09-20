import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld_gmp6sj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld_gmp6sj"/>`,
		"fallback": "lineicons:pinterest",
	});
}

export default Component;
