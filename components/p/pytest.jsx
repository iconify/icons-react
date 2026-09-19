import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxwmittsm.css';
import '../../css/m/m_s86hbok.css';
import '../../css/c/c1pyhhi8t.css';
import '../../css/x/xxahkkb2l.css';
import '../../css/c/c754cobvv.css';
import '../../css/w/wtmy8qb9x.css';
import '../../css/f/foy1ajblf.css';
import '../../css/u/uszgdy9zb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxwmittsm"/><path class="m_s86hbok"/><path class="c1pyhhi8t"/><path class="xxahkkb2l"/><path class="c754cobvv"/><path class="wtmy8qb9x"/><path class="foy1ajblf"/><path class="uszgdy9zb"/>`,
		"fallback": "devicon:pytest",
	});
}

export default Component;
