import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6o2llfuf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6o2llfuf"/>`,
		"fallback": "pinhead:survey-triangulation-disk",
	});
}

export default Component;
