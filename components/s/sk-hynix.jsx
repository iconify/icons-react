import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgxjr8bkm.css';
import '../../css/c/c7tsg_bsl.css';
import '../../css/v/v8ieag9dc.css';

const viewBox = {"width":28.453,"height":15.028};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pgxjr8bkm"><path class="c7tsg_bsl"/><path class="v8ieag9dc"/></g>`,
		"fallback": "thesvg-color:sk-hynix",
	});
}

export default Component;
