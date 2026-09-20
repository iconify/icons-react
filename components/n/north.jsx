import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl657zm3a.css';
import '../../css/a/a8lg92bba.css';
import '../../css/k/klr2-ud7v.css';
import '../../css/h/hjso-nprq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl657zm3a"/><path class="a8lg92bba"/><path class="klr2-ud7v"/><path class="hjso-nprq"/>`,
		"fallback": "openmoji:north",
	});
}

export default Component;
