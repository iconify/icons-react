import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha47b3bpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha47b3bpw"/>`,
		"fallback": "noviair-light:recycle-check",
	});
}

export default Component;
