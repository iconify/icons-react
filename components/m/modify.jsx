import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqthxu2un.css';
import '../../css/o/odu9prbhq.css';
import '../../css/q/qznx_nb7p.css';
import '../../css/m/mldihacsu.css';
import '../../css/w/w5_ugsbvw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDHsVwdeU"><g class="ft5dv1b6b"><path class="yqthxu2un"/><rect transform="rotate(45 34.606 4.908)" class="odu9prbhq"/><circle class="qznx_nb7p"/><circle class="mldihacsu"/><circle class="w5_ugsbvw"/></g></mask></defs><path mask="url(#SVGDHsVwdeU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:modify",
	});
}

export default Component;
