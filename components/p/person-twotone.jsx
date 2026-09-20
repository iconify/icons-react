import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlq2gj.css';
import '../../css/q/qc2ppy.css';
import '../../css/u/uw7p9r.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-22.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlq2gj qc2ppy"/><path class="qc2ppy uw7p9r"/>`,
		"fallback": "line-md:person-twotone",
	});
}

export default Component;
