import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irmk_pbcb.css';
import '../../css/z/zpt2lgb4a.css';
import '../../css/r/rpp_nsbbd.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irmk_pbcb"/><path class="zpt2lgb4a"/><path class="rpp_nsbbd"/>`,
		"fallback": "devicon:prisma",
	});
}

export default Component;
