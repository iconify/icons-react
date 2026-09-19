import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm1j0bb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm1j0bb9a"/>`,
		"fallback": "healthicons:lungs-24px",
	});
}

export default Component;
