import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/m/mqftf9b7u.css';
import '../../css/v/vz3gnmb6z.css';
import '../../css/a/ah_4sn46y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="mqftf9b7u"/><path class="vz3gnmb6z"/><path class="ah_4sn46y"/></g>`,
		"fallback": "streamline-sharp-color:projector-screen",
	});
}

export default Component;
