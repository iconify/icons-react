import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0hskbc8u.css';
import '../../css/a/af2lrdbuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0hskbc8u"/><path class="af2lrdbuq"/>`,
		"fallback": "solar:sofa-3-bold-duotone",
	});
}

export default Component;
