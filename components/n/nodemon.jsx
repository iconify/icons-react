import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euo4mnb-a.css';

const viewBox = {"width":451,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euo4mnb-a"/>`,
		"fallback": "file-icons:nodemon",
	});
}

export default Component;
