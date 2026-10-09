import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0heepbom.css';
import '../../css/f/fusgjgx2r.css';
import '../../css/e/egctjry8w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0heepbom"/><path class="fusgjgx2r"/><path class="egctjry8w"/>`,
		"fallback": "energy-icons:sort-alpha-20-bold",
	});
}

export default Component;
