import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0980kf7z.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0980kf7z"/>`,
		"fallback": "fontisto:treehouse",
	});
}

export default Component;
