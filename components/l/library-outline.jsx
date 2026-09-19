import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyjklpbqy.css';
import '../../css/t/t_y32l19z.css';
import '../../css/t/tb62sjbsx.css';
import '../../css/m/mf4zhw8on.css';
import '../../css/d/dcil5bbwz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="eyjklpbqy"/><path class="t_y32l19z"/><rect class="tb62sjbsx"/><rect class="mf4zhw8on"/><path class="dcil5bbwz"/>`,
		"fallback": "famicons:library-outline",
	});
}

export default Component;
