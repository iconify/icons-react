import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g406apbwa.css';
import '../../css/z/z0xba_bvq.css';
import '../../css/t/tb99jab_j.css';
import '../../css/n/n4fc89box.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g406apbwa"/><path class="z0xba_bvq"/><path class="tb99jab_j"/><path class="n4fc89box"/>`,
		"fallback": "selfhst:nimtable",
	});
}

export default Component;
