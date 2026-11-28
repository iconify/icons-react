import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrxmj0biq.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gcod-bc8e.css';
import '../../css/l/lx4p1b97v.css';
import '../../css/p/pmpia37up.css';
import '../../css/y/y6i34ubff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary wrxmj0biq"/><g class="dt0cm9dhy primary"><path class="gcod-bc8e"/><path class="lx4p1b97v"/><path class="pmpia37up"/><path class="y6i34ubff"/></g>`,
		"fallback": "iconaut:theater-mask-duo",
	});
}

export default Component;
