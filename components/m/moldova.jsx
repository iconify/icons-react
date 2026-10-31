import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyvag8bvb.css';
import '../../css/m/m5i6atqoz.css';
import '../../css/k/ks71f2jij.css';
import '../../css/a/a71cc-bwc.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyvag8bvb"/><path class="m5i6atqoz"/><path class="ks71f2jij"/><path class="a71cc-bwc"/>`,
		"fallback": "tabler-flags:moldova",
	});
}

export default Component;
