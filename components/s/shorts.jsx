import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_cnzsbat.css';
import '../../css/g/gtds0ibbz.css';
import '../../css/q/q46dpkbew.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeD7fgFUS"><g class="ft5dv1b6b"><path class="d_cnzsbat"/><path class="gtds0ibbz"/><path class="q46dpkbew"/></g></mask></defs><path mask="url(#SVGeD7fgFUS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:shorts",
	});
}

export default Component;
