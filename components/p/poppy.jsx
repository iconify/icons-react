import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3w7xo-ak.css';
import '../../css/b/bbprkmvye.css';
import '../../css/e/ehpzsf21u.css';
import '../../css/z/zwakmqbcg.css';
import '../../css/q/qoau1ybhj.css';
import '../../css/z/z-a8z-mhe.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3w7xo-ak"/><path class="bbprkmvye"/><ellipse transform="rotate(-24.119)" class="ehpzsf21u"/><path class="zwakmqbcg"/><path class="qoau1ybhj"/><path class="z-a8z-mhe"/>`,
		"fallback": "openmoji:poppy",
	});
}

export default Component;
