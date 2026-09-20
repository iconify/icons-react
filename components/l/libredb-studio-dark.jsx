import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uezwkhbui.css';
import '../../css/k/k-_y3hhqw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uezwkhbui"/><path class="k-_y3hhqw"/>`,
		"fallback": "selfhst:libredb-studio-dark",
	});
}

export default Component;
