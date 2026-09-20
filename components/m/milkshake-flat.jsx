import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bsoq4zgli.css';
import '../../css/i/iqv0xnyvl.css';
import '../../css/d/d3nxyvb1i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bsoq4zgli"/><path class="iqv0xnyvl"/><path class="d3nxyvb1i"/></g>`,
		"fallback": "streamline-color:milkshake-flat",
	});
}

export default Component;
