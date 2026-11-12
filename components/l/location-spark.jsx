import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcueyhkwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcueyhkwd"/>`,
		"fallback": "tabler:location-spark",
	});
}

export default Component;
