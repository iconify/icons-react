import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0n-z98hz.css';
import '../../css/m/mtz7ccm4k.css';
import '../../css/q/q6tsfi25s.css';
import '../../css/k/k0wu1ud0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0n-z98hz"/><path class="mtz7ccm4k"/><path class="q6tsfi25s"/><path class="k0wu1ud0m"/>`,
		"fallback": "withicons-bauhaus:layout-dashboard",
	});
}

export default Component;
