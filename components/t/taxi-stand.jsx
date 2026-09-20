import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mktlpu4xk.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mktlpu4xk"/>`,
		"fallback": "temaki:taxi-stand",
	});
}

export default Component;
