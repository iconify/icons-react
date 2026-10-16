import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqxty8b1p.css';
import '../../css/k/kvl9ucc0s.css';
import '../../css/p/p1_r36byr.css';
import '../../css/w/wx3unnb0j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqxty8b1p"/><path class="kvl9ucc0s"/><path class="p1_r36byr"/><path class="wx3unnb0j"/>`,
		"fallback": "energy-icons:screen-share-20",
	});
}

export default Component;
