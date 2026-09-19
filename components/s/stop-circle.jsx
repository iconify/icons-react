import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfx7l-bra.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfx7l-bra"/>`,
		"fallback": "fa-regular:stop-circle",
	});
}

export default Component;
