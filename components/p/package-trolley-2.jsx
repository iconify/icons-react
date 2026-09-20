import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/c/cr9ln6b1p.css';
import '../../css/f/f_xhw5bvk.css';
import '../../css/i/ixsl98qgd.css';
import '../../css/q/qp9emcbft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="cr9ln6b1p"/><path class="f_xhw5bvk"/><path class="ixsl98qgd"/><path class="qp9emcbft"/></g>`,
		"fallback": "streamline-cyber:package-trolley-2",
	});
}

export default Component;
