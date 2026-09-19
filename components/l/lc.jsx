import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/krlql_bjj.css';
import '../../css/g/g20mbbbvd.css';
import '../../css/j/j8rvdj99s.css';
import '../../css/r/rqcwvnpsb.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="krlql_bjj"/><path class="g20mbbbvd"/><path class="j8rvdj99s"/><path class="rqcwvnpsb"/></g>`,
		"fallback": "flagpack:lc",
	});
}

export default Component;
