import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m91g29p0v.css';
import '../../css/a/acti3litn.css';
import '../../css/s/sab5z8bmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m91g29p0v wm-k"/><path class="acti3litn wm-a"/><path class="sab5z8bmm wm-a"/>`,
		"fallback": "withicons-bauhaus:scale",
	});
}

export default Component;
