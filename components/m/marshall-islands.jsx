import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c85pd_b_f.css';
import '../../css/p/p8ch74sqh.css';
import '../../css/n/nlhkcl_uv.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c85pd_b_f"/><path class="p8ch74sqh"/><path class="nlhkcl_uv"/>`,
		"fallback": "tabler-flags:marshall-islands",
	});
}

export default Component;
