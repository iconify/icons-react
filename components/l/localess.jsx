import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncgeo_vzx.css';
import '../../css/g/glg0knb5a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ncgeo_vzx"/><path class="glg0knb5a"/>`,
		"fallback": "selfhst:localess",
	});
}

export default Component;
