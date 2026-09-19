import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxjfcsudw.css';
import '../../css/q/q-qy_1ldb.css';
import '../../css/v/v0mgkb00e.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxjfcsudw"/><path class="q-qy_1ldb"/><path class="v0mgkb00e"/>`,
		"fallback": "devicon:typeorm-wordmark",
	});
}

export default Component;
