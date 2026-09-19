import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g52asd2ib.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g52asd2ib"/>`,
		"fallback": "icomoon-free:stats-bars",
	});
}

export default Component;
