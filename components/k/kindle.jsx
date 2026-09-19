import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if33zkffk.css';
import '../../css/m/m0et3bbhv.css';
import '../../css/q/q6hywkbbd.css';
import '../../css/z/zy4ouxbjl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if33zkffk"/><path class="m0et3bbhv"/><path class="q6hywkbbd"/><path class="zy4ouxbjl"/>`,
		"fallback": "flat-color-icons:kindle",
	});
}

export default Component;
