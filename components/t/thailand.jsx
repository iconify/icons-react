import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlsrw1b-f.css';
import '../../css/l/lmk6h0bvk.css';
import '../../css/m/m8y_5gyeu.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlsrw1b-f"/><path class="lmk6h0bvk"/><path class="m8y_5gyeu"/>`,
		"fallback": "tabler-flags:thailand",
	});
}

export default Component;
