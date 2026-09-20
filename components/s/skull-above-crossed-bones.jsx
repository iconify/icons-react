import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glz_utbya.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glz_utbya"/>`,
		"fallback": "pinhead:skull-above-crossed-bones",
	});
}

export default Component;
