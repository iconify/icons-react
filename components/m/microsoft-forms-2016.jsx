import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znoie2bjy.css';
import '../../css/g/g15pwcbhu.css';
import '../../css/e/evac21bjn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znoie2bjy"/><path class="g15pwcbhu"/><path class="evac21bjn"/>`,
		"fallback": "selfhst:microsoft-forms-2016",
	});
}

export default Component;
