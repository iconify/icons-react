import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3nuv0byt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3nuv0byt"/>`,
		"fallback": "teenyicons:sound-on-solid",
	});
}

export default Component;
