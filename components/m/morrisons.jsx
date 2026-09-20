import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjx5_kvso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjx5_kvso"/>`,
		"fallback": "thesvg-color:morrisons",
	});
}

export default Component;
