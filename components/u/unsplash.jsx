import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a670m2dwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a670m2dwy"/>`,
		"fallback": "pixel:unsplash",
	});
}

export default Component;
