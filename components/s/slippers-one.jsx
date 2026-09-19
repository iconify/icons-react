import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/h-0rldb5a.css';
import '../../css/x/xerl5f7du.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="h-0rldb5a"/><path class="xerl5f7du"/></g>`,
		"fallback": "icon-park-solid:slippers-one",
	});
}

export default Component;
