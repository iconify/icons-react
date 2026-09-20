import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aze2xou7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aze2xou7f"/>`,
		"fallback": "thesvg:paytm",
	});
}

export default Component;
