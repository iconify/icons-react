import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwald2b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwald2b-d"/>`,
		"fallback": "streamline-sharp:screwdriver-wrench",
	});
}

export default Component;
