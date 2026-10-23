import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m59kz6bes.css';
import '../../css/l/lzcr22b6g.css';
import '../../css/v/vx1h0pbuu.css';
import '../../css/b/bc3qzfb5j.css';

const viewBox = {"width":544.01,"height":488.68};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m59kz6bes"/><path class="lzcr22b6g"/><path class="vx1h0pbuu"/><path class="bc3qzfb5j"/>`,
		"fallback": "thesvg-color:twig",
	});
}

export default Component;
