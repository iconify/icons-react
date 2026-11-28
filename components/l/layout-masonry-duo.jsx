import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiwgikbkg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mszasqbmr.css';
import '../../css/z/zlkuqfwhs.css';
import '../../css/t/tkuddxb0e.css';
import '../../css/a/a052_pweq.css';
import '../../css/l/l82o02btf.css';
import '../../css/b/bey_h2m-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiwgikbkg secondary"/><g class="dt0cm9dhy primary"><path class="mszasqbmr"/><path class="zlkuqfwhs"/><path class="tkuddxb0e"/><path class="a052_pweq"/><path class="l82o02btf"/><path class="bey_h2m-y"/></g>`,
		"fallback": "iconaut:layout-masonry-duo",
	});
}

export default Component;
