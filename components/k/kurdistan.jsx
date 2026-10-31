import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmibc4bxr.css';
import '../../css/k/k9mhepcsb.css';
import '../../css/a/aercjtb0m.css';
import '../../css/b/bw9zawbke.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmibc4bxr"/><path class="k9mhepcsb"/><path class="aercjtb0m"/><path class="bw9zawbke"/>`,
		"fallback": "tabler-flags:kurdistan",
	});
}

export default Component;
