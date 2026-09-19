import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/d/dkifpkb7f.css';
import '../../css/l/l7jrfnpql.css';
import '../../css/h/h4whgdcny.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="dkifpkb7f"/><path clip-rule="evenodd" class="l7jrfnpql"/><path clip-rule="evenodd" class="h4whgdcny"/></g>`,
		"fallback": "icon-park-outline:nests",
	});
}

export default Component;
