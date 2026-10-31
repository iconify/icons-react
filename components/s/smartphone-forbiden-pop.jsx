import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/t/t8e702bgi.css';
import '../../css/g/ggk_oivnm.css';
import '../../css/y/y18py1z7t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="co62ijjon"/><path class="t8e702bgi"/><path class="ggk_oivnm"/><path class="y18py1z7t"/></g>`,
		"fallback": "streamline-kameleon-color:smartphone-forbiden-pop",
	});
}

export default Component;
