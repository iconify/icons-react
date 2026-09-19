import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb9o4qvoo.css';
import '../../css/z/zfvyp8bow.css';
import '../../css/d/dw4cdfjco.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb9o4qvoo"/><path class="zfvyp8bow"/><path class="dw4cdfjco"/>`,
		"fallback": "famicons:repeat",
	});
}

export default Component;
