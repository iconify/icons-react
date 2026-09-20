import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqcr4rb1k.css';
import '../../css/h/hzpiyvrzz.css';
import '../../css/n/nnbxoqbug.css';
import '../../css/x/x5ki1kb4h.css';
import '../../css/h/hf2vh5bub.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqcr4rb1k"/><path class="hzpiyvrzz"/><path class="nnbxoqbug"/><path class="x5ki1kb4h"/><path class="hf2vh5bub"/>`,
		"fallback": "openmoji:red-apple",
	});
}

export default Component;
