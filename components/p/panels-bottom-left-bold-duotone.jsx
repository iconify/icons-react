import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k408t5b_f.css';
import '../../css/u/u7zit7oth.css';
import '../../css/i/iz-4hbcxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k408t5b_f"/><path class="u7zit7oth"/><path class="iz-4hbcxw"/>`,
		"fallback": "solar:panels-bottom-left-bold-duotone",
	});
}

export default Component;
