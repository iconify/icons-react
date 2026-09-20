import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg46avbzv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg46avbzv"/>`,
		"fallback": "pinhead:person-behind-barred-window",
	});
}

export default Component;
