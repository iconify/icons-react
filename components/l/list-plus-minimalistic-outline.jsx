import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y43hyfyoj.css';
import '../../css/l/lydkuv2ht.css';
import '../../css/e/ewevmsv6i.css';
import '../../css/o/owgp34bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y43hyfyoj"/><path class="lydkuv2ht"/><path class="ewevmsv6i"/><path class="owgp34bwe"/>`,
		"fallback": "solar:list-plus-minimalistic-outline",
	});
}

export default Component;
