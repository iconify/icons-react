import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9ehq2mog.css';
import '../../css/i/ij_095b6z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9ehq2mog"/><path class="ij_095b6z"/>`,
		"fallback": "energy-icons:thermal-camera-20",
	});
}

export default Component;
