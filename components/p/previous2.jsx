import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh07j0b2c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh07j0b2c"/>`,
		"fallback": "icomoon-free:previous2",
	});
}

export default Component;
