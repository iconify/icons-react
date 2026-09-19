import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdb6pe1ke.css';

const viewBox = {"width":384,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdb6pe1ke"/>`,
		"fallback": "zmdi:library",
	});
}

export default Component;
