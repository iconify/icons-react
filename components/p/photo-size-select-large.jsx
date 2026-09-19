import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acv8zdb0f.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acv8zdb0f"/>`,
		"fallback": "zmdi:photo-size-select-large",
	});
}

export default Component;
