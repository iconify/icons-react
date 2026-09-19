import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n64m8nfws.css';
import '../../css/o/oc_f315vi.css';
import '../../css/d/dg2xzd6cb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n64m8nfws"/><path class="oc_f315vi"/><path class="dg2xzd6cb"/>`,
		"fallback": "fluent-emoji-high-contrast:person-in-manual-wheelchair-facing-right",
	});
}

export default Component;
