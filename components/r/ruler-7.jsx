import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/fdqq-n2xp.css';
import '../../css/b/b7kku9sfo.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="fdqq-n2xp"/><path class="b7kku9sfo"/></g>`,
		"fallback": "marketeq:ruler-7",
	});
}

export default Component;
