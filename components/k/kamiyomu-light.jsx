import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvhecxojl.css';
import '../../css/z/z6eui5bmf.css';
import '../../css/w/wmrj8pbsd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvhecxojl"/><path class="z6eui5bmf"/><path class="wmrj8pbsd"/>`,
		"fallback": "selfhst:kamiyomu-light",
	});
}

export default Component;
