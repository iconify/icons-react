import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jq8i14b1j.css';
import '../../css/b/b9c_zrhtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jq8i14b1j"/><path class="b9c_zrhtc"/></g>`,
		"fallback": "keyline-icons:store-two-tone",
	});
}

export default Component;
