import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s_vv--byy.css';
import '../../css/o/oruz1_utz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s_vv--byy"/><circle class="oruz1_utz"/></g>`,
		"fallback": "meteor-icons:list-music",
	});
}

export default Component;
