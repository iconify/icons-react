import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5d6_fnqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5d6_fnqc"/>`,
		"fallback": "grommet-icons:rotate-left",
	});
}

export default Component;
