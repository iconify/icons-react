import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf9w5nbmj.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf9w5nbmj"/>`,
		"fallback": "maki:teahouse-11",
	});
}

export default Component;
