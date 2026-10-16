import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9oan5bbl.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9oan5bbl"/><path class="c65-ehvfy"/>`,
		"fallback": "energy-icons:smog-48",
	});
}

export default Component;
