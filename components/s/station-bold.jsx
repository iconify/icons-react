import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aonk6ia5q.css';
import '../../css/b/bb_ez-z-f.css';
import '../../css/g/gv-68uz1p.css';
import '../../css/u/unb31ubmx.css';
import '../../css/u/ul5ak2zpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aonk6ia5q"/><path class="bb_ez-z-f"/><path class="gv-68uz1p"/><path class="unb31ubmx"/><path clip-rule="evenodd" class="ul5ak2zpq"/>`,
		"fallback": "solar:station-bold",
	});
}

export default Component;
