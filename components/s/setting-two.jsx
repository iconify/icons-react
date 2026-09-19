import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jjevecgxz.css';
import '../../css/c/csty3qb7g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="jjevecgxz"/><path class="csty3qb7g"/></g>`,
		"fallback": "icon-park:setting-two",
	});
}

export default Component;
