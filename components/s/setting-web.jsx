import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2qll0bhn.css';
import '../../css/e/e9to63mfe.css';
import '../../css/k/k1uq304yb.css';
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
		"content": `<defs><mask id="SVGXs93Lb8Y"><g class="ft5dv1b6b"><path class="g2qll0bhn"/><path class="e9to63mfe"/><circle transform="matrix(0 -1 -1 0 10 14)" class="k1uq304yb"/><circle transform="matrix(0 -1 -1 0 16 14)" class="k1uq304yb"/><circle class="u4nfojbvx"/><path class="ir-49k8je"/></g></mask></defs><path mask="url(#SVGXs93Lb8Y)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:setting-web",
	});
}

export default Component;
