import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk-ucv3un.css';
import '../../css/e/ek9bptpxf.css';
import '../../css/v/vek2qqbgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk-ucv3un"/><path class="ek9bptpxf"/><path class="vek2qqbgd"/>`,
		"fallback": "token:maha",
	});
}

export default Component;
