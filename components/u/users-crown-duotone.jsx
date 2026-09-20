import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcna0htye.css';
import '../../css/e/et2ofsb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcna0htye"/><path class="et2ofsb-x"/>`,
		"fallback": "stash:users-crown-duotone",
	});
}

export default Component;
