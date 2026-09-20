import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/m/m_86pu.css';
import '../../css/y/ydovum.css';
import '../../css/u/uj17_n.css';
import '../../css/p/p171en.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-70.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-4c0-hc.css';
import '../../css/d/d-i58k3z.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew m_86pu ydovum"/><path class="uj17_n ydovum"/><path class="iw1iew p171en"/>`,
		"fallback": "line-md:tablet-screenshot-twotone",
	});
}

export default Component;
