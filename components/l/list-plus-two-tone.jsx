import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ryvt14b8p.css';
import '../../css/o/o7okk_bgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ryvt14b8p"/><path class="o7okk_bgo"/></g>`,
		"fallback": "keyline-icons:list-plus-two-tone",
	});
}

export default Component;
