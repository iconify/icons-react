import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4y-mwcbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4y-mwcbx"/>`,
		"fallback": "streamline-logos:netflix-logo",
	});
}

export default Component;
