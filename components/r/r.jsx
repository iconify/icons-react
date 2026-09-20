import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btu8jzbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btu8jzbqw"/>`,
		"fallback": "material-icon-theme:r",
	});
}

export default Component;
