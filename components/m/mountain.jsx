import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfa17oyjf.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfa17oyjf"/>`,
		"fallback": "fa-solid:mountain",
	});
}

export default Component;
