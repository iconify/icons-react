import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl66i7bqg.css';
import '../../css/a/anq4ponik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="cl66i7bqg"/><path class="anq4ponik"/>`,
		"fallback": "solar:magnifier-bold-duotone",
	});
}

export default Component;
