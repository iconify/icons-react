import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/sx2q93wsp.css';
import '../../css/q/q30h5qb3d.css';
import '../../css/m/mivn5-bye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="sx2q93wsp"/><path class="q30h5qb3d"/><path class="mivn5-bye"/></g>`,
		"fallback": "streamline-sharp-color:phone-pen-2",
	});
}

export default Component;
