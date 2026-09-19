import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpt0rl_0q.css';
import '../../css/r/rq9ws1zkw.css';
import '../../css/w/w568sxg-m.css';
import '../../css/t/ty03fguwr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="gpt0rl_0q"><path class="rq9ws1zkw"/><path class="w568sxg-m"/><path class="ty03fguwr"/></g>`,
		"fallback": "icon-park-outline:smart-optimization",
	});
}

export default Component;
