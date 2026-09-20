import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/owjz1ac0i.css';
import '../../css/y/y7lu9yb5z.css';
import '../../css/a/ayo73pbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="owjz1ac0i"/><path class="y7lu9yb5z"/><path class="ayo73pbzj"/></g>`,
		"fallback": "keyline-icons:umbrella-off-duotone",
	});
}

export default Component;
