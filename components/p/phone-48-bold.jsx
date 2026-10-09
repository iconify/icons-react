import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr0t56j8f.css';
import '../../css/v/vqxkeugkg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr0t56j8f"/><path class="vqxkeugkg"/>`,
		"fallback": "energy-icons:phone-48-bold",
	});
}

export default Component;
