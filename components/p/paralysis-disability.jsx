import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo6-b-g-q.css';
import '../../css/u/ug9pg4zkx.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo6-b-g-q"/><path class="ug9pg4zkx"/>`,
		"fallback": "fontisto:paralysis-disability",
	});
}

export default Component;
