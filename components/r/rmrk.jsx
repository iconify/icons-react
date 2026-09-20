import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr37i9x0n.css';
import '../../css/g/g06w--byr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xr37i9x0n"/><path class="g06w--byr"/>`,
		"fallback": "token:rmrk",
	});
}

export default Component;
