import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2e4psbwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2e4psbwx"/>`,
		"fallback": "keyline-icons:trending-up-sharp-two-tone",
	});
}

export default Component;
