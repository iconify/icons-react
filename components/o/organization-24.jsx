import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqx4czu-u.css';
import '../../css/k/koinx6osy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqx4czu-u"/><path class="koinx6osy"/>`,
		"fallback": "octicon:organization-24",
	});
}

export default Component;
