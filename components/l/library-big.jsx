import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/yq-pnmbue.css';
import '../../css/p/pf879db8w.css';
import '../../css/x/xt7m8jbkq.css';
import '../../css/u/ueejq9bbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="yq-pnmbue"/><path class="pf879db8w"/><path class="xt7m8jbkq"/><path class="ueejq9bbl"/></g>`,
		"fallback": "hugeicons:library-big",
	});
}

export default Component;
