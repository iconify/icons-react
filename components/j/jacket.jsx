import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pkwnxxbuy.css';
import '../../css/a/avkwxrbxi.css';
import '../../css/m/ml553kega.css';
import '../../css/g/gd0d5n2es.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pkwnxxbuy"/><path class="avkwxrbxi"/><path class="ml553kega"/><path class="gd0d5n2es"/></g>`,
		"fallback": "lucide-lab:jacket",
	});
}

export default Component;
