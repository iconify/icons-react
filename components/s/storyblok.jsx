import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plm10vjyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plm10vjyt"/>`,
		"fallback": "thesvg:storyblok",
	});
}

export default Component;
