import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/z/z9qk59bdu.css';
import '../../css/o/o41m9g48r.css';
import '../../css/h/hmcoah3hh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="z9qk59bdu"/><path class="o41m9g48r"/><path class="hmcoah3hh"/></g>`,
		"fallback": "icon-park:lock",
	});
}

export default Component;
