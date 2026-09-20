import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g77a37bgg.css';
import '../../css/u/ur3w_zb6c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g77a37bgg"/><path class="ur3w_zb6c"/>`,
		"fallback": "selfhst:nicotine-plus-light",
	});
}

export default Component;
