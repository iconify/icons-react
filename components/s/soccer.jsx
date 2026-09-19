import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb1vc-e3r.css';
import '../../css/x/xs322_bdu.css';
import '../../css/b/bm-jhkqqp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="tb1vc-e3r"/><path class="xs322_bdu"/><path class="bm-jhkqqp"/>`,
		"fallback": "carbon:soccer",
	});
}

export default Component;
