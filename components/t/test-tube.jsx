import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pddcmsbna.css';
import '../../css/d/dn0mdxfaw.css';
import '../../css/c/cno_h1bwt.css';
import '../../css/r/rgii3wb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="pddcmsbna"/><circle class="dn0mdxfaw"/><circle class="cno_h1bwt"/><path class="rgii3wb9y"/>`,
		"fallback": "eos-icons:test-tube",
	});
}

export default Component;
