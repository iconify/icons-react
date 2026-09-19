import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qtzje3bum.css';
import '../../css/o/o5savzbqo.css';
import '../../css/v/vuupicbet.css';
import '../../css/g/gugq7bf4n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJTsiwboa"><g class="ft5dv1b6b"><rect class="qtzje3bum"/><rect class="o5savzbqo"/><circle class="vuupicbet"/><path class="gugq7bf4n"/></g></mask></defs><path mask="url(#SVGJTsiwboa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:oven",
	});
}

export default Component;
