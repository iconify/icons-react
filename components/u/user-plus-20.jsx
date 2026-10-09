import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa2v1ywbh.css';
import '../../css/r/rfg83443v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa2v1ywbh"/><path class="rfg83443v"/>`,
		"fallback": "energy-icons:user-plus-20",
	});
}

export default Component;
