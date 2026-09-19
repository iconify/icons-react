import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n35mfrb1w.css';
import '../../css/c/crlngeb_w.css';
import '../../css/j/jssk5pctd.css';
import '../../css/v/voxh6ccdb.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n35mfrb1w"/><path class="crlngeb_w"/><path class="jssk5pctd"/><path class="voxh6ccdb"/></g>`,
		"fallback": "cuida:sort-ascending-duotone",
	});
}

export default Component;
