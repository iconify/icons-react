import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwkrfjg0w.css';
import '../../css/k/ks1061b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwkrfjg0w"/><path class="ks1061b-o"/>`,
		"fallback": "bitcoin-icons:sofa-filled",
	});
}

export default Component;
