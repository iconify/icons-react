import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho5eq6b4k.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho5eq6b4k"/>`,
		"fallback": "ei:sc-skype",
	});
}

export default Component;
