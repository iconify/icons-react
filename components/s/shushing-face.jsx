import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsfv02bvb.css';
import '../../css/n/n_pikq9wt.css';
import '../../css/i/iee3nhbrg.css';
import '../../css/t/tb90g4hyi.css';
import '../../css/h/hmd4bhb2m.css';
import '../../css/b/blvwopbwu.css';
import '../../css/m/mnf89jb6d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="tsfv02bvb"/><path class="n_pikq9wt"/><path class="iee3nhbrg"/><path class="tb90g4hyi"/><path class="hmd4bhb2m"/><path class="blvwopbwu"/><path class="mnf89jb6d"/>`,
		"fallback": "openmoji:shushing-face",
	});
}

export default Component;
