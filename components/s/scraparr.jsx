import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmllns1vc.css';
import '../../css/u/uqy1x4y0w.css';
import '../../css/h/hwfk2ib8p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmllns1vc"/><path class="uqy1x4y0w"/><path class="hwfk2ib8p"/>`,
		"fallback": "selfhst:scraparr",
	});
}

export default Component;
