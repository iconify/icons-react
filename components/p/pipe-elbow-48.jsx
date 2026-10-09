import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur1gjzh2v.css';
import '../../css/u/uaklp-bbr.css';
import '../../css/e/ekmag7bro.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur1gjzh2v"/><path class="uaklp-bbr"/><path class="ekmag7bro"/>`,
		"fallback": "energy-icons:pipe-elbow-48",
	});
}

export default Component;
