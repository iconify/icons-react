import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbcpwhboh.css';
import '../../css/m/m-pwbqb_w.css';
import '../../css/n/n2yc4rnpz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbcpwhboh"/><path class="m-pwbqb_w"/><path class="n2yc4rnpz"/>`,
		"fallback": "heroicons:square-3-stack-3d-16-solid",
	});
}

export default Component;
