import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0hexbc2j.css';
import '../../css/h/h447xtb1d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="o0hexbc2j"/><path class="h447xtb1d"/>`,
		"fallback": "selfhst:traccar",
	});
}

export default Component;
