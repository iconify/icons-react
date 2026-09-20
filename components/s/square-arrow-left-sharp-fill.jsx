import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhc52fgri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhc52fgri"/>`,
		"fallback": "keyline-icons:square-arrow-left-sharp-fill",
	});
}

export default Component;
