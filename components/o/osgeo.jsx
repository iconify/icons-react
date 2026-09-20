import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewr23_bpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewr23_bpx"/>`,
		"fallback": "thesvg-color:osgeo",
	});
}

export default Component;
