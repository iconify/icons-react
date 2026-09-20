import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw6y4-jlg.css';
import '../../css/m/m9biyvb8g.css';
import '../../css/z/zrrxbeb2v.css';
import '../../css/t/tm0lw447f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw6y4-jlg"/><path class="m9biyvb8g"/><path class="zrrxbeb2v"/><path class="tm0lw447f"/>`,
		"fallback": "token:tulip",
	});
}

export default Component;
