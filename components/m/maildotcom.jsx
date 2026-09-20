import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guc0uebjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guc0uebjz"/>`,
		"fallback": "thesvg-color:maildotcom",
	});
}

export default Component;
