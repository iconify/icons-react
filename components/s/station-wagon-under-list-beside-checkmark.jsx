import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv878y2jt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv878y2jt"/>`,
		"fallback": "pinhead:station-wagon-under-list-beside-checkmark",
	});
}

export default Component;
