import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/x/xqdj7wbly.css';
import '../../css/p/p_az3fbck.css';
import '../../css/d/dkneg4bhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="xqdj7wbly"/><path class="p_az3fbck"/><path class="dkneg4bhg"/>`,
		"fallback": "solar:upload-twice-square-bold-duotone",
	});
}

export default Component;
