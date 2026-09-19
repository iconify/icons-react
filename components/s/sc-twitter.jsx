import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6kyc2-vd.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6kyc2-vd"/>`,
		"fallback": "ei:sc-twitter",
	});
}

export default Component;
