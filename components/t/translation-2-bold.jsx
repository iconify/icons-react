import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv_cx9b4d.css';
import '../../css/q/qi7fugv8z.css';
import '../../css/r/rma8h1e1k.css';
import '../../css/b/b4m79xbnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nv_cx9b4d"/><path clip-rule="evenodd" class="qi7fugv8z"/><path class="rma8h1e1k"/><path class="b4m79xbnb"/>`,
		"fallback": "solar:translation-2-bold",
	});
}

export default Component;
