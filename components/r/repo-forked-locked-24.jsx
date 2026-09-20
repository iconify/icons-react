import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/peg2icuzl.css';
import '../../css/p/prhwfbcjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="peg2icuzl"/><path class="prhwfbcjs"/>`,
		"fallback": "octicon:repo-forked-locked-24",
	});
}

export default Component;
