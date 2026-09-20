import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n3rx67pmh.css';
import '../../css/y/y6xgxuzrp.css';
import '../../css/a/ayo73pbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n3rx67pmh"/><path class="y6xgxuzrp"/><path class="ayo73pbzj"/></g>`,
		"fallback": "keyline-icons:monitor-off-duotone",
	});
}

export default Component;
