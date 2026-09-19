import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn58-rbyn.css';
import '../../css/i/ihuhp8x1t.css';
import '../../css/f/f4v_liz2h.css';
import '../../css/t/tmksm5bqd.css';
import '../../css/p/poqn3h4kh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn58-rbyn"/><path class="ihuhp8x1t"/><path class="f4v_liz2h"/><path class="tmksm5bqd"/><path class="poqn3h4kh"/>`,
		"fallback": "flat-color-icons:speaker",
	});
}

export default Component;
