import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iormuebre.css';
import '../../css/f/fzppklb-k.css';
import '../../css/p/p0rwbubiw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iormuebre"/><path class="fzppklb-k"/><path class="p0rwbubiw"/>`,
		"fallback": "openmoji:toothbrush",
	});
}

export default Component;
