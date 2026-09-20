import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lurbt5era.css';
import '../../css/l/layi-mb4r.css';
import '../../css/k/ks9c86i1m.css';
import '../../css/c/cwafcrynf.css';

const viewBox = {"width":256,"height":320};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lurbt5era"/><path class="layi-mb4r"/><path class="ks9c86i1m"/><path class="cwafcrynf"/>`,
		"fallback": "thesvg-color:lit",
	});
}

export default Component;
