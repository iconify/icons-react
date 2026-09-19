import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea7r9xsmx.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea7r9xsmx"/>`,
		"fallback": "gis:screen-dub-o",
	});
}

export default Component;
