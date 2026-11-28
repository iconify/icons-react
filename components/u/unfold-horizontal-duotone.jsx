import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwk2vgbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwk2vgbgb primary"/>`,
		"fallback": "iconaut:unfold-horizontal-duotone",
	});
}

export default Component;
