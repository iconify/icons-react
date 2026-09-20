import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pw3n31uic.css';
import '../../css/b/bww9v6dvb.css';

const viewBox = {"width":340,"height":340};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pw3n31uic"/><path class="bww9v6dvb"/></g>`,
		"fallback": "material-icon-theme:wakatime-light",
	});
}

export default Component;
