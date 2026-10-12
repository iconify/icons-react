import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ud9660a5y.css';
import '../../css/n/nx2zbfb5m.css';
import '../../css/n/nzmariesu.css';
import '../../css/n/nbqssjb9c.css';
import '../../css/s/s4cdm1nek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ud9660a5y"/><path class="nx2zbfb5m"/><path class="nzmariesu"/><path class="nbqssjb9c"/><path class="s4cdm1nek"/></g>`,
		"fallback": "lucide-extended:radar-duotone",
	});
}

export default Component;
