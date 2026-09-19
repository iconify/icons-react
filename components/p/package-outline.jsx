import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xj770uoak.css';
import '../../css/g/git7khw6g.css';
import '../../css/c/cnhnbbayd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="package-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="xj770uoak"/><path class="git7khw6g"/><path class="cnhnbbayd"/></g></g>`,
		"fallback": "cuida:package-outline",
	});
}

export default Component;
