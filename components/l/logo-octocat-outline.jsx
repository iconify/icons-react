import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzpmrsbbt.css';
import '../../css/y/yg_pakoyp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzpmrsbbt"/><path class="yg_pakoyp"/>`,
		"fallback": "ion:logo-octocat-outline",
	});
}

export default Component;
