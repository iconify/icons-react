import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udncrub7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udncrub7z"/>`,
		"fallback": "noviair:tea-cup",
	});
}

export default Component;
