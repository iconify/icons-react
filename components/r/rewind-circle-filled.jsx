import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/n/ndcvrosav.css';
import '../../css/w/w5zrfkb2i.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGkEkVXb2w"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="ndcvrosav"/><path class="w5zrfkb2i"/></g></mask></defs><circle mask="url(#SVGkEkVXb2w)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:rewind-circle-filled",
	});
}

export default Component;
