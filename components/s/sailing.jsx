import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/w/wyjql0_kb.css';
import '../../css/e/er7kyvbwc.css';
import '../../css/s/s1q69fbxu.css';
import '../../css/d/djo_6or7z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="wyjql0_kb"/><path class="er7kyvbwc"/><path class="s1q69fbxu"/><path class="djo_6or7z"/></g>`,
		"fallback": "icon-park-solid:sailing",
	});
}

export default Component;
