import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoh0qgbbx.css';
import '../../css/v/v5i6l7b1q.css';
import '../../css/d/d-mnptbxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoh0qgbbx wm-k"/><path class="v5i6l7b1q wm-a"/><path class="d-mnptbxt wm-k"/>`,
		"fallback": "withicons-bauhaus:traffic-cone",
	});
}

export default Component;
