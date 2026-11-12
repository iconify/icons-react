import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm_gj4b2t.css';
import '../../css/t/tfzexxbcu.css';
import '../../css/q/qqef1qxre.css';
import '../../css/g/g0sr1db5j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm_gj4b2t"/><path class="tfzexxbcu"/><path class="qqef1qxre"/><path class="g0sr1db5j"/>`,
		"fallback": "selfhst:streamystats",
	});
}

export default Component;
