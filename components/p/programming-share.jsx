import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/r/rbbp18b7d.css';
import '../../css/h/h405dk_xs.css';
import '../../css/l/lh-4h4hzb.css';
import '../../css/p/peb5hlbzf.css';
import '../../css/o/ojgx84bkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="rbbp18b7d"/><path class="h405dk_xs"/><path class="lh-4h4hzb"/><path class="peb5hlbzf"/><path class="ojgx84bkr"/></g>`,
		"fallback": "streamline-cyber:programming-share",
	});
}

export default Component;
