import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti0_56jad.css';
import '../../css/c/c34z_sbtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti0_56jad"/><path class="c34z_sbtf"/>`,
		"fallback": "akar-icons:stack-overflow-fill",
	});
}

export default Component;
