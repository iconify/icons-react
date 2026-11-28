import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmaui0_pa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmaui0_pa"/>`,
		"fallback": "noviair:radiation",
	});
}

export default Component;
