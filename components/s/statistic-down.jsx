import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ro3entbmx.css';
import '../../css/n/nan1oj9ep.css';
import '../../css/v/v4cifz20c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ro3entbmx"/><path class="nan1oj9ep"/><path class="v4cifz20c"/></g>`,
		"fallback": "akar-icons:statistic-down",
	});
}

export default Component;
