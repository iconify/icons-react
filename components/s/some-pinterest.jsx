import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k983gnjgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k983gnjgv"/>`,
		"fallback": "nrk:some-pinterest",
	});
}

export default Component;
