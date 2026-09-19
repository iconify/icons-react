import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbnj-ebyu.css';
import '../../css/r/rugsosn5v.css';
import '../../css/j/j5ys1knya.css';
import '../../css/n/n_c732bco.css';
import '../../css/t/tc01s7q8p.css';
import '../../css/c/cou58qtmt.css';
import '../../css/n/nxvcoh25b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pbnj-ebyu"/><path class="rugsosn5v"/><path clip-rule="evenodd" class="j5ys1knya"/><path class="n_c732bco"/><path clip-rule="evenodd" class="tc01s7q8p"/><path class="cou58qtmt"/><path clip-rule="evenodd" class="nxvcoh25b"/>`,
		"fallback": "cuida:moon-outline",
	});
}

export default Component;
