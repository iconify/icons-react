import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu46yu7sj.css';
import '../../css/d/dk68j6z_t.css';
import '../../css/t/tjav81vfv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu46yu7sj"/><path class="dk68j6z_t"/><path class="tjav81vfv"/>`,
		"fallback": "selfhst:streamyfin-dark",
	});
}

export default Component;
