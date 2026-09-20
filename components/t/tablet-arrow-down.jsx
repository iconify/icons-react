import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/c/c2npje.css';
import '../../css/n/nhjobb.css';
import '../../css/i/ic1ogj.css';
import '../../css/i/ix-rlm.css';
import '../../css/s/so-from-70.css';
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
		"content": `<path class="a0m25c c2npje"/><path class="nhjobb"/><path class="a0m25c ic1ogj"/><path class="a0m25c ix-rlm"/>`,
		"fallback": "line-md:tablet-arrow-down",
	});
}

export default Component;
