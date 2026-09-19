import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zx9fmqb4n.css';
import '../../css/g/gjxkdkbcj.css';
import '../../css/n/nvarbzb-o.css';
import '../../css/k/k11dbhzax.css';
import '../../css/e/eqne90b8g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLl4aCj4w"><g class="ft5dv1b6b"><path class="zx9fmqb4n"/><path class="gjxkdkbcj"/><circle class="nvarbzb-o"/><path class="k11dbhzax"/><circle class="eqne90b8g"/></g></mask></defs><path mask="url(#SVGLl4aCj4w)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:shopping-bag",
	});
}

export default Component;
