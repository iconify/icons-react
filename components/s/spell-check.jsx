import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpx7y9xrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpx7y9xrw"/>`,
		"fallback": "lucide:spell-check",
	});
}

export default Component;
