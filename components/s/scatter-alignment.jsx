import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/ac5-9om6a.css';
import '../../css/y/ywyki9b9z.css';
import '../../css/m/mirhr8m2n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ac5-9om6a"/><path class="ywyki9b9z"/><path class="mirhr8m2n"/></g>`,
		"fallback": "icon-park:scatter-alignment",
	});
}

export default Component;
