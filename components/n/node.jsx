import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r28egxbtw.css';
import '../../css/q/qc8hk8p9a.css';
import '../../css/x/x86ajrbie.css';
import '../../css/h/hfhyg-m5g.css';
import '../../css/v/vy7ke6bke.css';
import '../../css/e/em0ickbet.css';
import '../../css/j/j60zr3b4x.css';
import '../../css/d/dftf9rvck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="r28egxbtw"/><circle class="qc8hk8p9a"/><circle class="x86ajrbie"/><circle class="hfhyg-m5g"/><circle class="vy7ke6bke"/><path class="em0ickbet"/><circle class="j60zr3b4x"/><circle class="dftf9rvck"/>`,
		"fallback": "eos-icons:node",
	});
}

export default Component;
