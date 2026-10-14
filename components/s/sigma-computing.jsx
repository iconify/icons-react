import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trkm4uhtd.css';

const viewBox = {"width":36,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trkm4uhtd"/>`,
		"fallback": "thesvg-color:sigma-computing",
	});
}

export default Component;
