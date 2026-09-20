import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdl0eybov.css';
import '../../css/z/z1aoycclw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdl0eybov"/><path class="z1aoycclw"/>`,
		"fallback": "selfhst:watchguard",
	});
}

export default Component;
