import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzap-88ur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzap-88ur"/>`,
		"fallback": "keyline-icons:scan-barcode-sharp-fill",
	});
}

export default Component;
