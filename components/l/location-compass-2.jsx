import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/v/v10irub5c.css';
import '../../css/y/yh8u5h8yq.css';
import '../../css/h/hwmfh0hsa.css';
import '../../css/k/krjqjquya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="v10irub5c"/><path class="yh8u5h8yq"/><path class="hwmfh0hsa"/><path class="krjqjquya"/></g>`,
		"fallback": "streamline-sharp-color:location-compass-2",
	});
}

export default Component;
