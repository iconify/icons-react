import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev392zb0m.css';
import '../../css/i/iusq5pwib.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev392zb0m"/><path class="iusq5pwib"/>`,
		"fallback": "energy-icons:nozzle-20-bold",
	});
}

export default Component;
