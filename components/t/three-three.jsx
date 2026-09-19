import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p16xzgbwe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p16xzgbwe"/>`,
		"fallback": "icon-park:three-three",
	});
}

export default Component;
