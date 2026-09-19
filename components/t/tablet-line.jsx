import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjafqbcjo.css';
import '../../css/l/lnd6titzq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 qjafqbcjo"/><path class="clr-i-outline clr-i-outline-path-2 lnd6titzq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:tablet-line",
	});
}

export default Component;
