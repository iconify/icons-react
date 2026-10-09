import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xshrh9bfm.css';
import '../../css/d/dndnoxzim.css';
import '../../css/b/bjc55qb5x.css';
import '../../css/k/km_en3cdb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xshrh9bfm"/><path class="dndnoxzim"/><path class="bjc55qb5x"/><path class="km_en3cdb"/>`,
		"fallback": "energy-icons:portable-solar-20",
	});
}

export default Component;
