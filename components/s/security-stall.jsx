import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/c/ce8f6vpfr.css';
import '../../css/n/nzqwv94kx.css';
import '../../css/s/sdbl3ttsf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjDu76bFJ"><g class="hv130ab-t"><path class="ce8f6vpfr"/><path class="nzqwv94kx"/><path class="sdbl3ttsf"/></g></mask></defs><path mask="url(#SVGjDu76bFJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:security-stall",
	});
}

export default Component;
