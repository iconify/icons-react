import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8a-spftx.css';
import '../../css/f/f--a68y4g.css';
import '../../css/a/a8z3xdbuh.css';
import '../../css/j/jjuwgeb1s.css';
import '../../css/a/ay8131wny.css';
import '../../css/p/pvt39jcep.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8a-spftx"/><path class="f--a68y4g"/><path class="a8z3xdbuh"/><path class="jjuwgeb1s"/><circle class="ay8131wny"/><path class="pvt39jcep"/>`,
		"fallback": "openmoji:orange-book",
	});
}

export default Component;
