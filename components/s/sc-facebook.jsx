import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz9m54bmw.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz9m54bmw"/>`,
		"fallback": "ei:sc-facebook",
	});
}

export default Component;
