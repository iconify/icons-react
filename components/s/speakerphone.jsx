import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4hnn6fqm.css';
import '../../css/i/i5cu0abur.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4hnn6fqm"/><path class="i5cu0abur"/>`,
		"fallback": "ion:speakerphone",
	});
}

export default Component;
