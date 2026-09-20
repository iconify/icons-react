import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei34isb5x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei34isb5x"/>`,
		"fallback": "pinhead:person-sitting-in-steam-sauna",
	});
}

export default Component;
