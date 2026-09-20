import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1y_zhbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1y_zhbca"/>`,
		"fallback": "thesvg-color:mubi",
	});
}

export default Component;
