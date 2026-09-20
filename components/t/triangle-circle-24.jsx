import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib9o-eblw.css';
import '../../css/k/kret6cc4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib9o-eblw"/><path class="kret6cc4w"/>`,
		"fallback": "octicon:triangle-circle-24",
	});
}

export default Component;
