import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v8bnwkbre.css';
import '../../css/u/u43r19bom.css';
import '../../css/j/j5mopbbpq.css';
import '../../css/s/shu3xdl9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v8bnwkbre"/><path class="u43r19bom"/><path class="j5mopbbpq"/><circle class="shu3xdl9q"/></g>`,
		"fallback": "lucide:loader-pinwheel",
	});
}

export default Component;
