import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbqs97bkm.css';
import '../../css/n/n39l6qvec.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbqs97bkm"/><path class="n39l6qvec"/>`,
		"fallback": "streamline-pixel:real-estate-building-3",
	});
}

export default Component;
