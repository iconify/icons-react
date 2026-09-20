import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga54jte-m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ga54jte-m"/>`,
		"fallback": "teenyicons:sort-reverse-alphabetically-solid",
	});
}

export default Component;
