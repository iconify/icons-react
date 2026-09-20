import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmllns1vc.css';
import '../../css/u/uqy1x4y0w.css';
import '../../css/d/d1kn0uj4f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmllns1vc"/><path class="uqy1x4y0w"/><path class="d1kn0uj4f"/>`,
		"fallback": "selfhst:scraparr",
	});
}

export default Component;
