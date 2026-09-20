import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eao8dbouc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eao8dbouc"/>`,
		"fallback": "tabler:sort-descending-shapes",
	});
}

export default Component;
