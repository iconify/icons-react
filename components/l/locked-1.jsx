import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tetbrrbka.css';
import '../../css/j/j9auzlb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tetbrrbka"/><path class="j9auzlb2n"/>`,
		"fallback": "lineicons:locked-1",
	});
}

export default Component;
