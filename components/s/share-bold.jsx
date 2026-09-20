import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjfcd84ht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjfcd84ht"/>`,
		"fallback": "solar:share-bold",
	});
}

export default Component;
