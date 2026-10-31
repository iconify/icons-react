import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7x-4e4hm.css';
import '../../css/x/x_t76jq2h.css';
import '../../css/f/fhw0kygnc.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7x-4e4hm"/><path class="x_t76jq2h"/><path class="fhw0kygnc"/>`,
		"fallback": "tabler-flags:republic-congo",
	});
}

export default Component;
