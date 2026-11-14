import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjt3w2r2y.css';
import '../../css/u/ur0c75b6l.css';
import '../../css/o/oepyxvbqx.css';
import '../../css/a/ab7x2lbyj.css';
import '../../css/y/yu2hljb1e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjt3w2r2y"/><path class="ur0c75b6l"/><path class="oepyxvbqx"/><path class="ab7x2lbyj"/><path class="yu2hljb1e"/>`,
		"fallback": "selfhst:swarmpit",
	});
}

export default Component;
