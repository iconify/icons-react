import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1o8mdb_p.css';
import '../../css/t/twm3r6b7t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1o8mdb_p"/><path clip-rule="evenodd" class="twm3r6b7t"/>`,
		"fallback": "teenyicons:pin-solid",
	});
}

export default Component;
