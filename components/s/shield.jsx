import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fuasb1myr.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/j/jl35dlbam.css';
import '../../css/w/wkvf31xoe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fuasb1myr"/><g class="mc2zb0bvp"><circle class="jl35dlbam"/><path class="wkvf31xoe"/></g></g>`,
		"fallback": "struq:shield",
	});
}

export default Component;
