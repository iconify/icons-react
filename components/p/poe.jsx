import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvwtus5-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvwtus5-r"/>`,
		"fallback": "thesvg-color:poe",
	});
}

export default Component;
