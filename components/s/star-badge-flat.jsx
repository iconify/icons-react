import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyepgqb2o.css';
import '../../css/v/vhrfcdf4h.css';
import '../../css/l/l3i7g_quo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gyepgqb2o"/><path clip-rule="evenodd" class="vhrfcdf4h"/><path class="l3i7g_quo"/></g>`,
		"fallback": "streamline-sharp-color:star-badge-flat",
	});
}

export default Component;
