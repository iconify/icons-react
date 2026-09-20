import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtgmpjkvu.css';
import '../../css/k/kzggjzb5i.css';

const viewBox = {"width":800,"height":800,"top":-38};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtgmpjkvu"/><path class="kzggjzb5i"/>`,
		"fallback": "thesvg-color:unikoo",
	});
}

export default Component;
