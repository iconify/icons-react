import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acbz_02fw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acbz_02fw"/>`,
		"fallback": "ci:unsplash",
	});
}

export default Component;
