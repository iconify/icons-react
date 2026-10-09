import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqbe_cc_j.css';
import '../../css/c/cot5v44oq.css';
import '../../css/b/b00qdxb4c.css';
import '../../css/z/zwi9klbqr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqbe_cc_j"/><path class="cot5v44oq"/><path class="b00qdxb4c"/><path class="zwi9klbqr"/>`,
		"fallback": "energy-icons:treehouse-48-bold",
	});
}

export default Component;
