import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udz5nqb7v.css';
import '../../css/n/nf63yr-ml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udz5nqb7v"/><path clip-rule="evenodd" class="nf63yr-ml"/>`,
		"fallback": "solar:to-pip-bold",
	});
}

export default Component;
