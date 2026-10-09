import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-f-m2b4w.css';
import '../../css/a/a5---6bmt.css';
import '../../css/p/p8v8gwqin.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-f-m2b4w"/><path class="a5---6bmt"/><path class="p8v8gwqin"/>`,
		"fallback": "energy-icons:solar-cell-48-bold",
	});
}

export default Component;
