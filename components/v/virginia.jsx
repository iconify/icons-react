import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5ngebrkm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5ngebrkm"/>`,
		"fallback": "pinhead:virginia",
	});
}

export default Component;
