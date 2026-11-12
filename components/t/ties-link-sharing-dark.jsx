import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fztcq4amu.css';
import '../../css/n/nqloolbrw.css';
import '../../css/i/ixhapwbfk.css';
import '../../css/l/lp5di2bvu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fztcq4amu"/><path class="nqloolbrw"/><path class="ixhapwbfk"/><path class="lp5di2bvu"/>`,
		"fallback": "selfhst:ties-link-sharing-dark",
	});
}

export default Component;
