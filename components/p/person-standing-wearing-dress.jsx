import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0le36bep.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0le36bep"/>`,
		"fallback": "pinhead:person-standing-wearing-dress",
	});
}

export default Component;
