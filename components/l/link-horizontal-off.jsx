import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcmm31bju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcmm31bju"/>`,
		"fallback": "ci:link-horizontal-off",
	});
}

export default Component;
