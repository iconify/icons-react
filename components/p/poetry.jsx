import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv2niwbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv2niwbhi"/>`,
		"fallback": "simple-icons:poetry",
	});
}

export default Component;
