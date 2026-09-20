import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/m-nuw3bni.css';
import '../../css/q/qdgi0le6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="m-nuw3bni"/><path class="qdgi0le6y"/></g>`,
		"fallback": "streamline-logos:linux-mint-logo-2",
	});
}

export default Component;
