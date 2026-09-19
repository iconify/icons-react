import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csa0z4bwa.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csa0z4bwa"/>`,
		"fallback": "glyphs-poly:picnic-table",
	});
}

export default Component;
