import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcutg2b4x.css';
import '../../css/m/m5w08nblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcutg2b4x"/><path class="m5w08nblt"/>`,
		"fallback": "streamline-ultimate:road-sign-stop-bold",
	});
}

export default Component;
