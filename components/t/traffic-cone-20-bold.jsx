import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vaw8nnulj.css';
import '../../css/b/bpcftybjh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vaw8nnulj"/><path class="bpcftybjh"/>`,
		"fallback": "energy-icons:traffic-cone-20-bold",
	});
}

export default Component;
