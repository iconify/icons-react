import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz502wzwo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz502wzwo"/>`,
		"fallback": "temaki:kerb-flush",
	});
}

export default Component;
