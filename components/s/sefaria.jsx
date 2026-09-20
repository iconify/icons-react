import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vymz57bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vymz57bep"/>`,
		"fallback": "thesvg-color:sefaria",
	});
}

export default Component;
