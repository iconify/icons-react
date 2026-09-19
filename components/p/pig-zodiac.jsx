import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/g/g5eejacyb.css';
import '../../css/v/v34u89hpd.css';
import '../../css/m/mopo17b-n.css';
import '../../css/o/ojmvobcla.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="g5eejacyb"/><path class="v34u89hpd"/><path class="mopo17b-n"/><path class="ojmvobcla"/></g>`,
		"fallback": "icon-park:pig-zodiac",
	});
}

export default Component;
