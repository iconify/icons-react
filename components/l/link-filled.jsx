import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2oc1ljfc.css';
import '../../css/o/olpmu-5dh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2oc1ljfc"/><path class="olpmu-5dh"/>`,
		"fallback": "bitcoin-icons:link-filled",
	});
}

export default Component;
