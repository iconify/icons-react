import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt5086bag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt5086bag"/>`,
		"fallback": "simple-icons:openlayers",
	});
}

export default Component;
