import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/ildl9bb0g.css';
import '../../css/g/gjvsk4icl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ildl9bb0g"/><path class="gjvsk4icl"/></g>`,
		"fallback": "icon-park-solid:signal-tower",
	});
}

export default Component;
