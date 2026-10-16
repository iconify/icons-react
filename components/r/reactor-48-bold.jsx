import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu57r0fpa.css';
import '../../css/b/by5oxcb_w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu57r0fpa"/><path class="by5oxcb_w"/>`,
		"fallback": "energy-icons:reactor-48-bold",
	});
}

export default Component;
