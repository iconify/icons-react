import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dczarkgib.css';

const viewBox = {"width":960,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dczarkgib"/>`,
		"fallback": "whh:touchpad",
	});
}

export default Component;
