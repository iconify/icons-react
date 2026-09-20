import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcowhso_o.css';
import '../../css/v/vnjuuubcl.css';
import '../../css/o/oxuzwkbyu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcowhso_o"/><path class="vnjuuubcl"/><path class="oxuzwkbyu"/>`,
		"fallback": "selfhst:ringlink",
	});
}

export default Component;
