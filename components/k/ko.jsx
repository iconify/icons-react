import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/j/jnhwfibdi.css';
import '../../css/f/f0eoi3b2v.css';
import '../../css/k/kg_-czs4x.css';
import '../../css/l/lru14bdan.css';
import '../../css/j/jxo0kq-5m.css';
import '../../css/i/iyjslbbxb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsKo0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsKo0)"><path class="jnhwfibdi"/><path class="f0eoi3b2v"/><path class="kg_-czs4x"/><path class="lru14bdan"/><circle class="jxo0kq-5m"/><circle class="iyjslbbxb"/></g>`,
		"fallback": "circle-flags:ko",
	});
}

export default Component;
