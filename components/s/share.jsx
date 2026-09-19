import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jrxssqnyz.css';
import '../../css/r/rzyzgqcqn.css';
import '../../css/t/ticjgqbdl.css';
import '../../css/f/fex6dubso.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="jrxssqnyz"/><circle class="rzyzgqcqn"/><circle class="ticjgqbdl"/><path class="fex6dubso"/></g>`,
		"fallback": "charm:share",
	});
}

export default Component;
