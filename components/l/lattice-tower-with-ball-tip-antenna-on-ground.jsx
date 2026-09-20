import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqhiw328v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqhiw328v"/>`,
		"fallback": "pinhead:lattice-tower-with-ball-tip-antenna-on-ground",
	});
}

export default Component;
