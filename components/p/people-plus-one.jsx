import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ghyioabfx.css';
import '../../css/i/iuv0n94zw.css';
import '../../css/n/nvnwx-40l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ghyioabfx"/><path clip-rule="evenodd" class="iuv0n94zw"/><path class="nvnwx-40l"/></g>`,
		"fallback": "icon-park-outline:people-plus-one",
	});
}

export default Component;
