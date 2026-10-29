import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/in2j8iy9x.css';
import '../../css/a/apd15e1-n.css';
import '../../css/g/glpi5abzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="in2j8iy9x"/><path class="apd15e1-n"/><path class="glpi5abzu"/></g>`,
		"fallback": "withicons-bauhaus:spider-web",
	});
}

export default Component;
