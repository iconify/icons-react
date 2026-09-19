import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bja55jb5m.css';
import '../../css/u/u6ndf9jqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="settings-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="bja55jb5m"/><path class="u6ndf9jqp"/></g></g>`,
		"fallback": "cuida:settings-outline",
	});
}

export default Component;
