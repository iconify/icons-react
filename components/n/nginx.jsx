import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za-3b2xgq.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za-3b2xgq"/>`,
		"fallback": "fontisto:nginx",
	});
}

export default Component;
