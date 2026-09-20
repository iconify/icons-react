import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj_-cngib.css';
import '../../css/z/z-izombsf.css';
import '../../css/b/b9755ib4n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj_-cngib"/><path class="z-izombsf"/><path class="b9755ib4n"/>`,
		"fallback": "selfhst:postgresql",
	});
}

export default Component;
