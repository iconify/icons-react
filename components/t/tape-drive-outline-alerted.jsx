import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q92h78rqc.css';
import '../../css/a/aqufsx63j.css';
import '../../css/u/ugwb95b6a.css';
import '../../css/e/epi8ovb-q.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q92h78rqc"/><path class="aqufsx63j"/><path class="ugwb95b6a"/><path class="epi8ovb-q"/>`,
		"fallback": "clarity:tape-drive-outline-alerted",
	});
}

export default Component;
