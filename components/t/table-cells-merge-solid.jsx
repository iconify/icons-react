import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx0pw3fls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gx0pw3fls"/>`,
		"fallback": "sidekickicons:table-cells-merge-solid",
	});
}

export default Component;
