import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/keia154hf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="keia154hf"/>`,
		"fallback": "bxl:sst",
	});
}

export default Component;
