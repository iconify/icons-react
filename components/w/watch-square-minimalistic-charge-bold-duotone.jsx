import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n71meqx1z.css';
import '../../css/m/md4zfsbwr.css';
import '../../css/s/sd06qfc3h.css';
import '../../css/m/mwmwneokw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n71meqx1z"/><path class="md4zfsbwr"/><path class="sd06qfc3h"/><path class="mwmwneokw"/>`,
		"fallback": "solar:watch-square-minimalistic-charge-bold-duotone",
	});
}

export default Component;
