import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okh68-bde.css';
import '../../css/c/cagb5gb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okh68-bde"/><path class="cagb5gb_p"/>`,
		"fallback": "mage:photoshop",
	});
}

export default Component;
