import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/g/g21do5pdv.css';
import '../../css/x/xx4egsacr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="g21do5pdv"/><path class="xx4egsacr"/>`,
		"fallback": "solar:receive-square-bold-duotone",
	});
}

export default Component;
