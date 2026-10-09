import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dywh2-b_s.css';
import '../../css/q/qqyc4mb2t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dywh2-b_s"/><path class="qqyc4mb2t"/>`,
		"fallback": "energy-icons:monopile-20-bold",
	});
}

export default Component;
