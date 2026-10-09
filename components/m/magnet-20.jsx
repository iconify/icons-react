import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvc1jlbnu.css';
import '../../css/j/juittjbbz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvc1jlbnu"/><path class="juittjbbz"/>`,
		"fallback": "energy-icons:magnet-20",
	});
}

export default Component;
