import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pz16xacpd.css';
import '../../css/y/y9arhtm8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pz16xacpd"/><path class="y9arhtm8a"/></g>`,
		"fallback": "lucide:rewind",
	});
}

export default Component;
