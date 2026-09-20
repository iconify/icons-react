import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bplkplbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bplkplbik"/>`,
		"fallback": "keyline-icons:square-dashed-sharp",
	});
}

export default Component;
