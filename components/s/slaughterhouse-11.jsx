import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuz81zbeq.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuz81zbeq"/>`,
		"fallback": "maki:slaughterhouse-11",
	});
}

export default Component;
