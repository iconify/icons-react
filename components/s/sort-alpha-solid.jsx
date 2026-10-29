import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfdmfubxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfdmfubxq"/>`,
		"fallback": "withicons:sort-alpha-solid",
	});
}

export default Component;
