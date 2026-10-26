import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2cq_3tqj.css';
import '../../css/w/wil24ls7u.css';
import '../../css/s/s59jrqbcz.css';
import '../../css/n/ncuomcblu.css';
import '../../css/q/qnh2bvbjz.css';
import '../../css/q/q3x1afj2b.css';
import '../../css/c/c1dk7lb7t.css';

const viewBox = {"width":52,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o2cq_3tqj"><path class="wil24ls7u"/><path class="s59jrqbcz"/><path class="ncuomcblu"/><path class="qnh2bvbjz"/><path class="q3x1afj2b"/><path class="c1dk7lb7t"/></g>`,
		"fallback": "thesvg:posthog",
	});
}

export default Component;
