import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xl-jlp1rp.css';
import '../../css/w/w5e8dbcrx.css';
import '../../css/m/mxvnuacok.css';
import '../../css/n/n6ko2ebne.css';
import '../../css/i/imw9ldbzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xl-jlp1rp"/><path class="w5e8dbcrx"/><path class="mxvnuacok"/><path class="n6ko2ebne"/><path class="imw9ldbzq"/></g>`,
		"fallback": "solar:suitcase-tag-line-duotone",
	});
}

export default Component;
