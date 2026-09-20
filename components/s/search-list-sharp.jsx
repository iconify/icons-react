import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq4gaac2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq4gaac2w"/>`,
		"fallback": "keyline-icons:search-list-sharp",
	});
}

export default Component;
