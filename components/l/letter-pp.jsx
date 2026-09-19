import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu6i2gb8g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu6i2gb8g"/>`,
		"fallback": "carbon:letter-pp",
	});
}

export default Component;
