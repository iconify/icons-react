import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/gj7mgbb6o.css';
import '../../css/e/efeuc0qbu.css';
import '../../css/b/bzs_6oz_t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="gj7mgbb6o"/><path class="efeuc0qbu"/><path class="bzs_6oz_t"/></g>`,
		"fallback": "icon-park:shield-add",
	});
}

export default Component;
