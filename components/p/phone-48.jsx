import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijgh9kb6y.css';
import '../../css/r/r409soybt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijgh9kb6y"/><path class="r409soybt"/>`,
		"fallback": "energy-icons:phone-48",
	});
}

export default Component;
