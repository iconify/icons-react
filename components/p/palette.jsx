import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xuvpbxbtk.css';
import '../../css/o/od-p0spiz.css';
import '../../css/q/q8n9u3bhf.css';
import '../../css/t/tmi-7004z.css';
import '../../css/b/b6gruglaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xuvpbxbtk"/><circle class="od-p0spiz"/><circle class="q8n9u3bhf"/><circle class="tmi-7004z"/><circle class="b6gruglaw"/></g>`,
		"fallback": "lucide:palette",
	});
}

export default Component;
