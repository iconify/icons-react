import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osm6vrb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osm6vrb-s"/>`,
		"fallback": "thesvg-color:subaru",
	});
}

export default Component;
