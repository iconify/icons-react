import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hv10n728u.css';
import '../../css/k/kx5symxxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="hv10n728u"/><path class="kx5symxxl"/></g>`,
		"fallback": "hugeicons:user-settings-02",
	});
}

export default Component;
