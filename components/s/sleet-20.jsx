import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szva8fs1o.css';
import '../../css/f/fgpw0_ztz.css';
import '../../css/n/n75s5g__s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szva8fs1o"/><path class="fgpw0_ztz"/><path class="n75s5g__s"/>`,
		"fallback": "energy-icons:sleet-20",
	});
}

export default Component;
