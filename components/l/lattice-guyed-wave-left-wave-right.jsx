import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngjzxub7r.css';
import '../../css/u/ua61w2bin.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngjzxub7r"/><path class="ua61w2bin"/>`,
		"fallback": "roentgen:lattice-guyed-wave-left-wave-right",
	});
}

export default Component;
