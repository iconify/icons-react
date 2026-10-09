import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djc8x4bhg.css';
import '../../css/i/i24xrk73t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djc8x4bhg"/><path class="i24xrk73t"/>`,
		"fallback": "energy-icons:saf-48-bold",
	});
}

export default Component;
