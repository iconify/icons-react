import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujj4-jdsj.css';
import '../../css/h/hbovmzbev.css';
import '../../css/u/uc21-y-ff.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujj4-jdsj"/><path class="hbovmzbev"/><path class="uc21-y-ff"/>`,
		"fallback": "selfhst:nx-witness-dark",
	});
}

export default Component;
