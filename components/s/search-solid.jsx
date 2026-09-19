import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhr6axbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jhr6axbos"/>`,
		"fallback": "basil:search-solid",
	});
}

export default Component;
