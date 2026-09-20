import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-7hzubuy.css';
import '../../css/m/m2p7gebqt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-7hzubuy"/><path class="m2p7gebqt"/>`,
		"fallback": "roentgen:lattice-dish-antenna-left-dish-antenna-right",
	});
}

export default Component;
