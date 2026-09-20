import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/n/nov9iu.css';
import '../../css/q/qqamjf.css';
import '../../css/s/suwabu.css';
import '../../css/k/k-a29e.css';
import '../../css/s/so-from-16.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c nov9iu"/><path class="a0m25c qqamjf"/><path class="a0m25c suwabu"/><path class="a0m25c k-a29e"/>`,
		"fallback": "line-md:menu-fold-left",
	});
}

export default Component;
