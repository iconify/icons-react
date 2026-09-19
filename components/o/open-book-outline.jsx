import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s4ecatbza.css';
import '../../css/a/agdtmdb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="open-book-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="s4ecatbza"/><path class="agdtmdb_i"/></g></g>`,
		"fallback": "cuida:open-book-outline",
	});
}

export default Component;
