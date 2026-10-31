import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oncbk1b8w.css';
import '../../css/f/fcr8reb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oncbk1b8w"/><path class="fcr8reb_t"/></g>`,
		"fallback": "coolicons:passport-duocolor-round",
	});
}

export default Component;
