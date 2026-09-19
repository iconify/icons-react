import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kezco1b7s.css';
import '../../css/i/imi7mmp6o.css';
import '../../css/v/v3ltxu4uq.css';
import '../../css/p/pkvsh8bih.css';
import '../../css/o/oj50a951g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kezco1b7s"/><path class="imi7mmp6o"/><path class="v3ltxu4uq"/><path class="pkvsh8bih"/><path class="oj50a951g"/></g>`,
		"fallback": "fluent-emoji-flat:seal",
	});
}

export default Component;
