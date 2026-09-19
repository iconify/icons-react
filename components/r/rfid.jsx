import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk6ielbwq.css';
import '../../css/c/c7gfsbb7m.css';
import '../../css/a/a1orltb6z.css';
import '../../css/n/nok52yrop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk6ielbwq"/><circle class="c7gfsbb7m"/><path class="a1orltb6z"/><path class="nok52yrop"/>`,
		"fallback": "bx:rfid",
	});
}

export default Component;
