import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luuhupbtk.css';
import '../../css/g/gtinig8dd.css';
import '../../css/u/umj1g9evr.css';
import '../../css/d/d3u3pvbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luuhupbtk"/><path class="gtinig8dd"/><path class="umj1g9evr"/><path class="d3u3pvbaj"/>`,
		"fallback": "withicons-bauhaus:monitor",
	});
}

export default Component;
