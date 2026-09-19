import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z35tf_spx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z35tf_spx"/>`,
		"fallback": "icon-park-outline:sailboat-one",
	});
}

export default Component;
