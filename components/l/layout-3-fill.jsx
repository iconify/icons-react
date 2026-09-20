import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sht7gzb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sht7gzb4f"/>`,
		"fallback": "ri:layout-3-fill",
	});
}

export default Component;
