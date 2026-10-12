import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f78o86b_t.css';
import '../../css/z/zjk6qwb9u.css';
import '../../css/m/mv1gubbor.css';
import '../../css/s/sfb8rqn9v.css';
import '../../css/k/ksydp3lsw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f78o86b_t"/><path class="zjk6qwb9u"/><path class="mv1gubbor"/><path class="sfb8rqn9v"/><path class="ksydp3lsw"/>`,
		"fallback": "energy-icons:substation-x-48-bold",
	});
}

export default Component;
