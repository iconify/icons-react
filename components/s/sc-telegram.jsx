import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4h35nmyx.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4h35nmyx"/>`,
		"fallback": "ei:sc-telegram",
	});
}

export default Component;
