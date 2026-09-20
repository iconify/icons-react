import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v185_bc8i.css';
import '../../css/f/fayz7l6of.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v185_bc8i"/><path class="fayz7l6of"/></g>`,
		"fallback": "streamline-plump-color:trending-content-flat",
	});
}

export default Component;
