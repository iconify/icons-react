import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pn_9iqbyj.css';
import '../../css/s/syjw58byn.css';
import '../../css/x/xjhroj3xy.css';
import '../../css/p/p5bw5jfhr.css';
import '../../css/k/k2k73ebqz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIpFeZdCb"><g class="ft5dv1b6b"><path class="pn_9iqbyj"/><path class="syjw58byn"/><path class="xjhroj3xy"/><path class="p5bw5jfhr"/><path class="k2k73ebqz"/></g></mask></defs><path mask="url(#SVGIpFeZdCb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:micro-slr-camera",
	});
}

export default Component;
