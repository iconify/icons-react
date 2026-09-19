import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njc6web4n.css';
import '../../css/i/iqll_cgam.css';
import '../../css/i/i5ggx7ltg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njc6web4n"/><path class="iqll_cgam"/><path class="i5ggx7ltg"/>`,
		"fallback": "ion:md-bowtie",
	});
}

export default Component;
