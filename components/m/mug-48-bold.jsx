import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1dnnyevj.css';
import '../../css/v/v1iup-t3t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1dnnyevj"/><path class="v1iup-t3t"/>`,
		"fallback": "energy-icons:mug-48-bold",
	});
}

export default Component;
