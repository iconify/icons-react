import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c1b4tva5l.css';
import '../../css/c/cefjig1hz.css';
import '../../css/y/ygox79bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c1b4tva5l"/><path class="cefjig1hz"/><circle class="ygox79bep"/></g>`,
		"fallback": "lets-icons:lock",
	});
}

export default Component;
