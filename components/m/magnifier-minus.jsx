import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nve8_x58c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nve8_x58c"/>`,
		"fallback": "gravity-ui:magnifier-minus",
	});
}

export default Component;
