import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5ny2v5ma.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5ny2v5ma"/>`,
		"fallback": "pinhead:spiky-fish-under-list-beside-checkmark",
	});
}

export default Component;
