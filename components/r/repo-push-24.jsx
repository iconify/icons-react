import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3aizm_py.css';
import '../../css/q/qeheuacbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3aizm_py"/><path class="qeheuacbm"/>`,
		"fallback": "octicon:repo-push-24",
	});
}

export default Component;
