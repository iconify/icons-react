import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/suj4n5bih.css';
import '../../css/y/ydewsccpi.css';
import '../../css/g/gacmsohwz.css';
import '../../css/p/pz9h9ac8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="suj4n5bih"/><path class="ydewsccpi"/><path class="gacmsohwz"/><path class="pz9h9ac8e"/></g>`,
		"fallback": "keyline-icons:language-sparkles-two-tone",
	});
}

export default Component;
