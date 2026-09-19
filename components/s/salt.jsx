import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/agywoi5bf.css';
import '../../css/f/f9ykafbjq.css';
import '../../css/v/vftpi3b2p.css';
import '../../css/y/yldznkxya.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="agywoi5bf"/><path class="f9ykafbjq"/><path class="vftpi3b2p"/><path class="yldznkxya"/></g>`,
		"fallback": "fluent-emoji-flat:salt",
	});
}

export default Component;
