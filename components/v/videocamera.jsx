import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/p/psxdx4bcl.css';
import '../../css/h/he--fc8qg.css';
import '../../css/b/bt89lfbsu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><rect class="psxdx4bcl"/><circle class="he--fc8qg"/><path class="bt89lfbsu"/></g>`,
		"fallback": "icon-park:videocamera",
	});
}

export default Component;
