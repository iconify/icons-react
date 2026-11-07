import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti6p48bml.css';
import '../../css/a/ahs3192tr.css';
import '../../css/o/ortpaq31n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti6p48bml"/><path class="ahs3192tr"/><path class="ortpaq31n"/>`,
		"fallback": "solar:text-cross-bold",
	});
}

export default Component;
