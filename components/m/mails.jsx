import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rvobcqbre.css';
import '../../css/b/bqvlh75im.css';
import '../../css/n/n9abwq_wt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rvobcqbre"/><path class="bqvlh75im"/><path class="n9abwq_wt"/></g>`,
		"fallback": "withicons-bauhaus:mails",
	});
}

export default Component;
