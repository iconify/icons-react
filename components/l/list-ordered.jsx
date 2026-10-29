import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9uc7rf_o.css';
import '../../css/c/csvyehbtj.css';
import '../../css/e/ezejqhb7r.css';
import '../../css/u/ujbefwbxq.css';
import '../../css/e/e6x2n8bwf.css';
import '../../css/v/vsgy4f12x.css';
import '../../css/s/slz6rpbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9uc7rf_o wm-shadow"/><path class="csvyehbtj wm-k"/><path class="ezejqhb7r wm-k"/><path class="ujbefwbxq wm-a"/><path class="e6x2n8bwf wm-a"/><path class="vsgy4f12x wm-a"/><path class="slz6rpbaj wm-a"/>`,
		"fallback": "withicons-pastel:list-ordered",
	});
}

export default Component;
