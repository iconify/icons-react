import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgd5ds6is.css';
import '../../css/i/i1nkquj9v.css';
import '../../css/u/u9bld2bat.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgd5ds6is"/><path class="i1nkquj9v"/><path class="u9bld2bat"/>`,
		"fallback": "energy-icons:trowel-20",
	});
}

export default Component;
