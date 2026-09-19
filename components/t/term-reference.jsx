import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b78okletp.css';
import '../../css/k/kqpn_smxt.css';
import '../../css/h/h51kgcb1t.css';
import '../../css/e/epwb1jbad.css';
import '../../css/e/e7t_nqb1l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b78okletp"/><circle class="kqpn_smxt"/><circle class="h51kgcb1t"/><circle class="epwb1jbad"/><path class="e7t_nqb1l"/>`,
		"fallback": "carbon:term-reference",
	});
}

export default Component;
