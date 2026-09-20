import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krt__vqrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krt__vqrn"/>`,
		"fallback": "tabler:number-5-small",
	});
}

export default Component;
