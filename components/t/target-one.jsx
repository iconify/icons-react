import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s4kwwhuwm.css';
import '../../css/m/mp9sosb_j.css';
import '../../css/t/teg8owbia.css';
import '../../css/b/b6rf6jbve.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s4kwwhuwm"/><path class="mp9sosb_j"/><path class="teg8owbia"/><path class="b6rf6jbve"/></g>`,
		"fallback": "icon-park-outline:target-one",
	});
}

export default Component;
