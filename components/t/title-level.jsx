import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/v/vvq0i9b7z.css';
import '../../css/g/gzw708umu.css';
import '../../css/m/mqnfj0biv.css';
import '../../css/i/i36jpfazz.css';
import '../../css/v/vhf8g-7jc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="vvq0i9b7z"/><path class="gzw708umu"/><path class="mqnfj0biv"/><path class="i36jpfazz"/><path class="vhf8g-7jc"/></g>`,
		"fallback": "icon-park:title-level",
	});
}

export default Component;
