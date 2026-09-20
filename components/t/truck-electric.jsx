import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bcij7o89t.css';
import '../../css/y/yuyn37ibu.css';
import '../../css/m/m9nrudbxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bcij7o89t"/><circle class="yuyn37ibu"/><circle class="m9nrudbxy"/></g>`,
		"fallback": "lucide:truck-electric",
	});
}

export default Component;
