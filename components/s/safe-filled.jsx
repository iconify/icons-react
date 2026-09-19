import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lam4d3b4j.css';
import '../../css/y/yrmzb_btc.css';
import '../../css/d/dftf9rvck.css';
import '../../css/p/pxomb-k8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lam4d3b4j"/><path clip-rule="evenodd" class="yrmzb_btc"/><circle class="dftf9rvck"/><path class="pxomb-k8l"/>`,
		"fallback": "bitcoin-icons:safe-filled",
	});
}

export default Component;
