import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2qll0bhn.css';
import '../../css/f/f0a4gwbcn.css';
import '../../css/k/k___aiysz.css';
import '../../css/u/u4nfojbvx.css';
import '../../css/i/ir-49k8je.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvC2FObTc"><g class="ft5dv1b6b"><path class="g2qll0bhn"/><path class="f0a4gwbcn"/><circle transform="matrix(0 -1 -1 0 10 14)" class="k___aiysz"/><circle transform="matrix(0 -1 -1 0 16 14)" class="k___aiysz"/><circle class="u4nfojbvx"/><path class="ir-49k8je"/></g></mask></defs><path mask="url(#SVGvC2FObTc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:setting-web",
	});
}

export default Component;
