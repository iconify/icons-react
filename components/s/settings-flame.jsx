import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/de4aa5bdu.css';
import '../../css/p/pia-ou0au.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="de4aa5bdu"/><path class="pia-ou0au"/></g>`,
		"fallback": "tabler:settings-flame",
	});
}

export default Component;
