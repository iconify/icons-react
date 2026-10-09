import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5y_4mbdq.css';
import '../../css/g/gdcg3vxtl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5y_4mbdq"/><path class="gdcg3vxtl"/>`,
		"fallback": "energy-icons:water-bottle-48-bold",
	});
}

export default Component;
