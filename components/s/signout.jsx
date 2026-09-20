import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m11n33b9i.css';
import '../../css/x/xt5xc0eya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m11n33b9i"/><path class="xt5xc0eya"/>`,
		"fallback": "stash:signout",
	});
}

export default Component;
