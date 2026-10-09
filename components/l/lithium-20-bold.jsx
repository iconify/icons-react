import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkwxxqb3q.css';
import '../../css/o/oljgu37pb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkwxxqb3q"/><path class="oljgu37pb"/>`,
		"fallback": "energy-icons:lithium-20-bold",
	});
}

export default Component;
