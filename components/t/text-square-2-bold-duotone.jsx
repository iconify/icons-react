import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr_0tlnfp.css';
import '../../css/g/g31oy2bki.css';
import '../../css/s/syhxrhbzv.css';
import '../../css/d/dm03gzbnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr_0tlnfp"/><path class="g31oy2bki"/><path class="syhxrhbzv"/><path class="dm03gzbnp"/>`,
		"fallback": "solar:text-square-2-bold-duotone",
	});
}

export default Component;
