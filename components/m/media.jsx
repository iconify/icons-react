import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab3zrzlrq.css';
import '../../css/b/bldxs_3nx.css';
import '../../css/k/k5dgsrbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab3zrzlrq"/><path class="bldxs_3nx"/><path class="k5dgsrbqo"/>`,
		"fallback": "token:media",
	});
}

export default Component;
