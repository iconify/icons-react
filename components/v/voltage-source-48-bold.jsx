import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe8f_eb4j.css';
import '../../css/z/z8jeaq2_u.css';
import '../../css/j/j-2pke6of.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe8f_eb4j"/><path class="z8jeaq2_u"/><path class="j-2pke6of"/>`,
		"fallback": "energy-icons:voltage-source-48-bold",
	});
}

export default Component;
